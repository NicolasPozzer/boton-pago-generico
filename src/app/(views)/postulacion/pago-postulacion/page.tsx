import React from 'react'
import PagoPostulacion from "@/components/pagos/pago-postulacion/PagoPostulacion";
import PagoConServipag from "@/components/pagos/Servipag/pages/pago-con-servipag";
import RecepcionaPage from "@/components/pagos/Servipag/pages/recepciona";
import StatusPage from "@/components/pagos/Servipag/pages/status";

export default function Page() {
  return (
    <>
      <PagoPostulacion/>
      {/*
      <PaymentPage/>
      <RecepcionaPage/>
      <StatusPage/>
      */}
    </>
  )
}
