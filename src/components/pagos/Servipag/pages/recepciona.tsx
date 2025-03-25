'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ReceptionResponse } from '@/components/pagos/Servipag/types/payment';
import { paymentService } from '@/components/pagos/Servipag/services/paymentService';

export default function RecepcionaPage() {
  const searchParams = useSearchParams();
  const [response, setResponse] = useState<ReceptionResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processResponse = async () => {
      // @ts-ignore
      const xml = searchParams.get('xml');

      if (xml) {
        try {
          const result = await paymentService.receivePayment(xml);
          setResponse(result);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Error desconocido');
        }
      }
    };

    processResponse();
  }, [searchParams]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!response) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Resultado del Pago</h1>

      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ID Transacción Servipag
          </label>
          <p>{response.id_trx_servipag}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ID Transacción Cliente
          </label>
          <p>{response.id_tx_cliente}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Estado del Pago
          </label>
          <p>{response.estado_pago}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Mensaje
          </label>
          <p>{response.mensaje}</p>
        </div>
      </div>
    </div>
  );
}
