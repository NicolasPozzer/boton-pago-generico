'use client';

import React, { useState } from 'react';
import { paymentService } from '@/components/pagos/Servipag/services/paymentService';
import StatusPage from "@/components/pagos/Servipag/pages/status";
import RecepcionaPage from "@/components/pagos/Servipag/pages/recepciona";
import {getDefaultPaymentDataCuotas} from "@/components/pagos/Servipag/utils/paymentDataCuotas";

interface PaymentCuotasPageProps {
  nroCuota: string | null;
  monto: string | null;
}

export default function PaymentCuotasPage({ nroCuota, monto }: PaymentCuotasPageProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!monto || !nroCuota) {
        throw new Error("Datos de pago incompletos.");
      }

      const paymentData = getDefaultPaymentDataCuotas(nroCuota, monto);
      const response = await paymentService.processPayment(paymentData);

      const form = document.createElement('form');
      form.method = 'POST';
      form.action = response.servipag_url;
      form.style.display = 'none';

      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = 'xml';
      input.value = response.xml;

      form.appendChild(input);
      document.body.appendChild(form);

      form.submit();
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

  return (
    <div className="container mx-auto p-4">
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
      </button>
    </div>
  );
}
