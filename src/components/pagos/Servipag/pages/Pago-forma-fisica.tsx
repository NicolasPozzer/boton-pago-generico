"use client"

import type React from "react"

import {useState, useRef} from "react"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader, CardTitle, CardFooter} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Badge} from "@/components/ui/badge"
import {Separator} from "@/components/ui/separator"
import {CreditCard, Copy, Check, Upload, X, ArrowRight, AlertCircle, FileText} from "lucide-react"
import {Alert, AlertDescription} from "@/components/ui/alert"
import {toast} from "@/components/ui/use-toast"
import {ToastAction} from "@/components/ui/toast"
import {useSearchParams} from "next/navigation";

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount") || ""; // Garantiza que sea string

  const [paymentCode, setPaymentCode] = useState<string | null>(null)
  const [paymentAmount, setPaymentAmount] = useState<string>(amount || "10")
  const [copied, setCopied] = useState(false)
  const [receiptImage, setReceiptImage] = useState<string | null>(null)
  const [receiptFile, setReceiptFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)


  const generatePaymentCode = () => {
    // Generar un código aleatorio de 10 caracteres
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let result = ""
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    setPaymentCode(result)
  }

  const copyToClipboard = () => {
    if (paymentCode) {
      navigator.clipboard.writeText(paymentCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Validar tipo de archivo
      if (!file.type.match("image/*") && file.type !== "application/pdf") {
        setError("El archivo debe ser una imagen o PDF")
        return
      }

      // Validar tamaño (máximo 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError("El archivo no debe superar los 5MB")
        return
      }

      setError(null)
      setReceiptFile(file)

      // Crear vista previa solo para imágenes
      if (file.type.match("image/*")) {
        const reader = new FileReader()
        reader.onload = (e) => {
          setReceiptImage(e.target?.result as string)
        }
        reader.readAsDataURL(file)
      } else {
        // Para PDFs, mostrar un icono genérico
        setReceiptImage("/placeholder.svg")
      }
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const removeImage = () => {
    setReceiptImage(null)
    setReceiptFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const submitPayment = async () => {
    if (!paymentCode || !receiptFile) {
      setError("Debe generar un código de pago y subir un comprobante")
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append("file", receiptFile)
      formData.append("codigo_pago", paymentCode)

      // Llamada a la API
      const response = await fetch(`/postulacion/pago-postulacion/pago-forma-fisica/`, {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.detail || "Error al subir el comprobante")
      }

      const data = await response.json()

      // Mostrar notificación de éxito
      toast({
        title: "Comprobante subido",
        description: "Tu comprobante ha sido recibido y está en proceso de validación.",
        action: <ToastAction altText="Cerrar">Cerrar</ToastAction>,
      })

      setIsSuccess(true)
    } catch (error) {
      console.error("Error:", error)
      setError(error instanceof Error ? error.message : "Error al procesar el pago")

      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Error al procesar el pago",
        action: <ToastAction altText="Cerrar">Cerrar</ToastAction>,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setPaymentCode(null)
    setReceiptImage(null)
    setReceiptFile(null)
    setIsSuccess(false)
    setError(null)
  }

  return (
    <div className="container mx-auto p-6 bg-white rounded">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Pago de Postulación</h1>
        <p className="text-slate-600">Genera tu código de pago y sube tu comprobante</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5"/>
              Proceso de Pago
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            {isSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="mx-auto bg-green-100 rounded-full p-3 w-16 h-16 flex items-center justify-center">
                  <Check className="h-8 w-8 text-green-600"/>
                </div>
                <h3 className="text-xl font-semibold text-green-700">¡Pago Registrado Exitosamente!</h3>
                <p className="text-slate-600">Tu comprobante ha sido recibido y está en proceso de validación.</p>
                <Button onClick={resetForm} className="mt-4">
                  Realizar otro pago
                </Button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Monto a pagar</p>
                    <p className="text-2xl font-bold">${paymentAmount}</p>
                  </div>
                  <Badge variant="outline" className="text-sm px-3 py-1">
                    Postulación
                  </Badge>
                </div>

                <Separator/>

                {!paymentCode ? (
                  <div className="text-center py-6 space-y-4">
                    <p className="text-slate-600">Genera un código único para realizar tu pago</p>
                    <Button onClick={generatePaymentCode}
                            className="w-full sm:w-auto bg-neutral-950 hover:bg-neutral-600 text-white">
                      Generar Código de Pago
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-slate-500">Tu código de pago</p>
                      <div className="flex items-center">
                        <div className="bg-slate-100 p-3 rounded-l-md flex-1 text-center">
                          <span className="text-xl font-mono font-bold tracking-wider">{paymentCode}</span>
                        </div>
                        <Button variant="outline" size="icon" className="rounded-l-none h-14" onClick={copyToClipboard}>
                          {copied ? <Check className="h-6 w-6"/> : <Copy className="h-6 w-6"/>}
                        </Button>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        Utiliza este código para identificar tu pago en el banco
                      </p>
                    </div>

                    <Alert>
                      <AlertDescription className="text-sm">
                        <p className="font-medium">Instrucciones de pago:</p>
                        <ol className="list-decimal pl-5 mt-2 space-y-1">
                          <li>Realiza una transferencia al Banco Estado</li>
                          <li>Cuenta Corriente: 9876543210</li>
                          <li>Titular: Andestic.</li>
                          <li>RUT: 61.101.XXX-X</li>
                          <li>Incluye el código de pago en el comentario</li>
                        </ol>
                      </AlertDescription>
                    </Alert>

                    <Separator/>

                    <div className="space-y-4">
                      <p className="text-sm font-medium text-slate-500">Subir comprobante de pago</p>

                      {!receiptImage ? (
                        <div
                          className="border-2 border-dashed rounded-md p-8 text-center cursor-pointer hover:bg-slate-50 transition-colors"
                          onClick={triggerFileInput}
                        >
                          <div
                            className="mx-auto w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                            <Upload className="h-6 w-6 text-slate-500"/>
                          </div>
                          <p className="text-sm font-medium">Haz clic para subir tu comprobante</p>
                          <p className="text-xs text-slate-500 mt-1">Formatos aceptados: JPG, PNG, PDF</p>
                          <Input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            accept="image/*,.pdf"
                            onChange={handleFileChange}
                          />
                        </div>
                      ) : (
                        <div className="relative border rounded-md p-2">
                          <div className="absolute top-3 right-3 flex space-x-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 bg-white rounded-full"
                              onClick={removeImage}
                            >
                              <X className="h-4 w-4"/>
                            </Button>
                          </div>
                          {receiptFile?.type === "application/pdf" ? (
                            <div className="flex items-center justify-center p-4 bg-slate-100 rounded">
                              <FileText className="h-12 w-12 text-slate-500"/>
                              <p className="ml-2 font-medium">{receiptFile.name}</p>
                            </div>
                          ) : (
                            <img
                              src={receiptImage || "/placeholder.svg"}
                              alt="Comprobante de pago"
                              className="w-full h-auto max-h-64 object-contain rounded"
                            />
                          )}
                        </div>
                      )}

                      {error && (
                        <Alert variant="destructive">
                          <AlertCircle className="h-4 w-4"/>
                          <AlertDescription>{error}</AlertDescription>
                        </Alert>
                      )}
                    </div>
                  </div>
                )}
              </>
            )}
          </CardContent>

          {paymentCode && receiptImage && !isSuccess && (
            <CardFooter className="flex justify-end gap-3 pt-2">
              <Button variant="outline" disabled={isSubmitting} onClick={() => setReceiptImage(null)}>
                Cambiar imagen
              </Button>
              <Button onClick={submitPayment} disabled={isSubmitting} className="flex items-center gap-2">
                {isSubmitting ? "Enviando..." : "Confirmar Pago"}
                {!isSubmitting && <ArrowRight className="h-4 w-4"/>}
              </Button>
            </CardFooter>
          )}
        </Card>

        {paymentCode && !isSuccess && (
          <div className="mt-6 text-center text-sm text-slate-500">
            <p>Si tienes problemas con el pago, contacta a soporte@andestic.com</p>
          </div>
        )}
      </div>
    </div>
  )
}

