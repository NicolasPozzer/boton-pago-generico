"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, CreditCard, ShieldCheck, Zap, Globe } from "lucide-react"
import React, {useEffect, useState} from "react";

export default function HomePage() {
  const [transactionId, setTransactionId] = useState<string | null>(null)

  useEffect(() => {
    // Verificar si existe un ID de transacción en caché
    const storedTransactionId = localStorage.getItem('servipag_transaction_id')
    if (storedTransactionId) {
      setTransactionId(storedTransactionId)
    }
  }, [])

  return (
    <>

      {transactionId && (
        <div className="fixed  right-4 bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded shadow-lg w-72">
          <div className="flex justify-between items-center">
            <span className="font-bold">Ultimo Pago Realizado</span>
            <button
              onClick={() => setTransactionId(null)}
              className="text-yellow-700 hover:text-yellow-900 font-bold text-lg"
            >
              &times;
            </button>
          </div>
          <div className="text-sm mt-2">
            ID de Transacción: <span className="font-mono">{transactionId}</span>
            <button
              onClick={() => {
                navigator.clipboard.writeText(transactionId);
                alert('ID copiado al portapapeles');
              }}
              className="ml-2 text-sm underline hover:text-yellow-900"
            >
              Copiar
            </button>
          </div>
          <div className="text-sm mt-2">
            <a
              href="/postulacion/check-pago"
              className="text-yellow-900 hover:text-yellow-950 underline"
            >
              Verificar estado del pago
            </a>
          </div>
        </div>
      )}

    <div className="flex flex-col min-h-screen rounded rounded-2">
      {/* Navbar */}
      <header className="border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <CreditCard className="h-6 w-6 text-yellow-500" />
            <span className="text-xl font-bold">Demo Sistema de Pago</span>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
                  Pagos simplificados para tu negocio
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Sistema de pagos rápido, seguro y confiable
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Acepta pagos en línea de forma segura y sin complicaciones. Ideal para todo tipo de negocios.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a href="/postulacion/pago-postulacion">
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
                      <CreditCard className="mr-2 h-4 w-4"/> Realizar Pago de Prueba
                    </Button>
                  </a>
                  <Button variant="outline" className="border-gray-200">
                    Conoce más
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ShieldCheck className="h-4 w-4 text-green-500"/>
                  <span className="text-gray-500">Datos protegidos con encriptación de 256-bit</span>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-2xl">
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-500/40 rounded-xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-xl shadow-lg w-[80%] max-w-[350px]">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-5 w-5 text-yellow-500"/>
                          <span className="font-medium">Pago Seguro</span>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Seguro
                        </Badge>
                      </div>
                      <div className="space-y-3">
                        <div className="h-2 bg-gray-100 rounded-full w-full"></div>
                        <div className="h-2 bg-gray-100 rounded-full w-3/4"></div>
                        <div className="h-2 bg-gray-100 rounded-full w-1/2"></div>
                      </div>
                      <div className="mt-4 pt-4 border-t">
                        <a href="/postulacion/pago-postulacion">
                          <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">Pagar $10.00</Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 bg-gray-100 rounded-lg rounded-4">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-yellow-100 px-3 py-1 text-sm text-yellow-700">
                  Características
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Todo lo que necesitas para gestionar tus pagos
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nuestra plataforma ofrece herramientas completas para procesar pagos de forma eficiente
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card className="border-0 shadow-sm bg-white">
                <CardHeader>
                  <Zap className="h-10 w-10 text-yellow-500 mb-2"/>
                  <CardTitle>Pagos Rápidos</CardTitle>
                  <CardDescription>Procesa pagos en segundos con nuestra plataforma optimizada</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500"/>
                      <span>Confirmación instantánea</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500"/>
                      <span>Múltiples métodos de pago</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500"/>
                      <span>Interfaz intuitiva</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm bg-white">
                <CardHeader>
                  <ShieldCheck className="h-10 w-10 text-yellow-500 mb-2"/>
                  <CardTitle>Seguridad Avanzada</CardTitle>
                  <CardDescription>Protección completa para tus transacciones y datos</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500"/>
                      <span>Encriptación de 256-bit</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500"/>
                      <span>Cumplimiento PCI DSS</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500"/>
                      <span>Detección de fraudes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm bg-white">
                <CardHeader>
                  <Globe className="h-10 w-10 text-yellow-500 mb-2"/>
                  <CardTitle>Cobertura Global</CardTitle>
                  <CardDescription>Acepta pagos desde cualquier parte del mundo</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500"/>
                      <span>Múltiples divisas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500"/>
                      <span>Conversión automática</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500"/>
                      <span>Soporte internacional</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <br/><br/><br/>
      </main>
    </div>
    </>
  )
}

