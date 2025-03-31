'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { paymentService } from '@/components/pagos/Servipag/services/paymentService';
import { getDefaultPaymentData } from '@/components/pagos/Servipag/utils/paymentData';
import StatusPage from "@/components/pagos/Servipag/pages/status";
import RecepcionaPage from "@/components/pagos/Servipag/pages/recepciona";
import PagoFormaFisica from "@/components/pagos/Servipag/pages/Pago-forma-fisica";
import {Button} from "@/components/ui/button";

interface PagoConServipagProps {
  amount: string; // Recibimos el monto como prop
}

export default function PagoConServipag({ amount }: PagoConServipagProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async () => {
    try {
      setLoading(true);
      setError(null);

      const paymentData = getDefaultPaymentData(amount);
      
      // Almacenar el ID de transacción en localStorage
      localStorage.setItem('servipag_transaction_id', paymentData.id_tx_pago);
      
      const response = await paymentService.processPayment(paymentData);

      // Crear y enviar el formulario
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = response.servipag_url;
      form.style.display = 'none'; // Ocultar el formulario

      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = 'xml';
      input.value = response.xml;

      form.appendChild(input);
      document.body.appendChild(form);

      console.log('Redirigiendo a Servipag...', {
        url: response.servipag_url,
        xml: response.xml
      });

      // Enviar el formulario
      form.submit();

      // Limpiar el formulario después de un breve delay
      setTimeout(() => {
        document.body.removeChild(form);
      }, 1000);

    } catch (err) {
      console.error('Error en handlePayment:', err);
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  /*
  PARA PROBAR XML4

  solicitud por servipag:

  127.0.0.1 - - [24/Feb/2025 15:30:10] "POST /contexto/?xml=%3CServipag%3E%3CFirmaServipag%3EZ8Wq888gLfwWw%20iOeFYR3dnTZlvddUA0yyXcE2deC3KkM%20u2wTQ8ZZM%2FiLsq1dzXoixDjv25VosJw86LjjpKpR54KI3kYWEixhLYQO6atgoBdFN1Bl%20l5bqnre2lS3PiJmDVLzjd%20pNSitVwVvoFclWdyQcOzjvn33oUKPEvRuk%3D%3C%2FFirmaServipag%3E%3CIdTrxServipag%3E31480756%3C%2FIdTrxServipag%3E%3CIdTxCliente%3ETX1740410867639%3C%2FIdTxCliente%3E%3CEstadoPago%3E0%3C%2FEstadoPago%3E%3CMensaje%3EPago%20OK%3C%2FMensaje%3E%3C%2FServipag%3E HTTP/1.1" 405 -
  */

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4"></h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}


      <button
        onClick={handlePayment}
        disabled={loading}
        className={`w-full transition-transform hover:scale-105 focus:outline-none disabled:opacity-50`}
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boton-servipag-i3dtiWyzUkAuah0cvGuTTRR0Sp8ufa.png"
          alt="Pagar con Servipag"
          width={150}
          height={60}
          className="mx-auto"
        />
        Online
      </button>

      {/*<div className="mt-4">

        <StatusPage/>
        <RecepcionaPage/>
      </div>*/}
    </div>
  );
}
