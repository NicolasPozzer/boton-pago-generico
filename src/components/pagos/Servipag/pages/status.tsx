"use client"
import { useState } from 'react';
import { TransactionStatus } from '../types/payment';
import { paymentService } from '../services/paymentService';

export default function StatusPage() {
  const [idTxCliente, setIdTxCliente] = useState('');
  const [status, setStatus] = useState<TransactionStatus | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckStatus = async () => {
    if (!idTxCliente) {
      setError('Por favor ingrese el ID de la transacción');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const result = await paymentService.checkTransactionStatus(idTxCliente);
      setStatus(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Estado de la Transacción</h1>

      <div className="mb-4">
        <input
          type="text"
          value={idTxCliente}
          onChange={(e) => setIdTxCliente(e.target.value)}
          placeholder="ID de la transacción"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <button
        onClick={handleCheckStatus}
        disabled={loading}
        className={`bg-blue-500 text-white px-4 py-2 rounded ${
          loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
        }`}
      >
        {loading ? 'Consultando...' : 'Consultar Estado'}
      </button>

      {error && (
        <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {status && (
        <div className="mt-4 bg-white shadow-md rounded px-8 pt-6 pb-8">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Estado
            </label>
            <p className={`font-bold ${
              status.estado === 'APROBADO' ? 'text-green-600' :
              status.estado === 'PENDIENTE' ? 'text-yellow-600' :
              'text-red-600'
            }`}>
              {status.estado}
            </p>
          </div>

          {status.fecha_actualizacion && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Última Actualización
              </label>
              <p>{new Date(status.fecha_actualizacion).toLocaleString()}</p>
            </div>
          )}

          {status.detalle && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Detalle
              </label>
              <p>{status.detalle}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
