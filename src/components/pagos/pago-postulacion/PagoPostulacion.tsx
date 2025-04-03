"use client"
import React, { useEffect, useState } from 'react'

import {CreditCard, Lock, AlertCircle, Printer} from 'lucide-react'
import {Button} from '@/components/ui/button'
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card'
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group'
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert'
import {Recibo} from '@/components/pagos/pago-postulacion/Recibo'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {Label} from "@radix-ui/react-label";
import {ReciboPagoRechazado} from "@/components/pagos/pago-postulacion/Recibo-pago-rechazado";
import PagoConServipag from "@/components/pagos/Servipag/pages/pago-con-servipag";
import RecepcionaPage from "@/components/pagos/Servipag/pages/recepciona";
import PagoFormaFisica from "@/components/pagos/Servipag/pages/Pago-forma-fisica";
import { Building } from "lucide-react"

export default function PagoPostulacion() {
  const [loading, setLoading] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('credit')
  const [step, setStep] = useState(1)

  const handlePayment = () => {
    setLoading(true)
    // Simular proceso de pago
    setTimeout(() => {
      setLoading(false)
      setStep(2)
    }, 2000)
  }

  const handlePrint = () => {
    window.print()
  }

  const receiptData = {
    orderNumber: '87674867473471473471',
    amount: '$ 10',
    name: 'Andestic SpA',
    email: 'contacto@andestic.com',
    region: 'RM',
    date: new Date().toLocaleDateString()
  }

  const errorData = {
    errorCode: 'ERR_PAYMENT_DECLINED',
    errorMessage: 'La transacción ha sido rechazada por el banco emisor',
    date: new Date().toLocaleString()
  }
  const [amount, setAmount] = useState(""); // Estado para el monto

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  return (
    <>
      <div
        className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 rounded-t-full">

        <Card className="w-full max-w-md">
          <CardHeader className="bg-yellow-400 text-black">
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              <CreditCard className="h-6 w-6"/>
              Pago Seguro
            </CardTitle>
            <CardDescription className="text-gray-800">
              Complete su pago de forma rápida y segura
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 mt-4">
            {step === 1 ? (
              <>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Resumen de compra</h3>
                  <div className="flex justify-between">
                    <span>Postulacion</span>
                    <span>${amount || "10"}</span>
                  </div>
                  <div className="flex justify-between font-bold mt-2">
                    <span>Total</span>
                    <span>${amount || "10"}</span>
                  </div>
                </div>


                <Alert>
                  <AlertCircle className="h-4 w-4"/>
                  <AlertTitle>Pago Seguro</AlertTitle>
                  <AlertDescription>
                    Tus datos están protegidos con encriptación de 256-bit.
                  </AlertDescription>
                </Alert>

                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Política de reembolso</AccordionTrigger>
                    <AccordionContent>
                      Ofrecemos un reembolso completo dentro de los primeros 30 días de la compra si no estás satisfecho.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <input
                  type="number"
                  value={amount}
                  placeholder="Ingrese monto de prueba"
                  onChange={handleAmountChange}
                  className="border p-2 rounded w-full text-center"
                />
              </>
            ) : (
              <div className="space-y-6">
                <div className="max-w-lg mx-auto bg-white">
                  <Recibo {...receiptData} />
                  <div className="flex flex-wrap gap-4 print:hidden">
                    <Button
                      className="flex-1 min-w-[150px] bg-yellow-400 hover:bg-yellow-500 text-black"
                      onClick={() => (window.location.href = "/#")}
                    >
                      Volver al Dashboard
                    </Button>
                    <Button
                      className="flex-1 min-w-[150px] bg-black hover:bg-gray-800 text-yellow-400"
                      onClick={handlePrint}
                    >
                      <Printer className="mr-2 h-4 w-4"/>
                      Imprimir Comprobante
                    </Button>
                  </div>
                </div>
              </div>

            )}
          </CardContent>
          {step === 1 && (
            <div className="p-6 pt-0">
              <div className="w-full space-y-4">
                <Label className="text-base font-semibold">Medios de pago:</Label>
                <PagoConServipag
                  amount={amount}/>

                {/* Pago de Manera Fisica */}


                <a
                  href={`/postulacion/pago-postulacion/pago-forma-fisica?amount=${amount}`}
                  className="w-full transition-transform hover:scale-105 focus:outline-none disabled:opacity-50"
                >
                  <div className="flex items-center justify-center">
                    <Button
                      className="flex items-center gap-2 min-w-[200px] bg-yellow-400 hover:bg-yellow-500 text-black">
                      <Building className="h-5 w-5"/> Pago En Sucursal Servipag
                    </Button>
                  </div>
                </a>


              </div>
            </div>
          )}
        </Card>
      </div>
    </>
  )
}
