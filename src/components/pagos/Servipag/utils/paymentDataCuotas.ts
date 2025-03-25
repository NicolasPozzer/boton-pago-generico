"use client"
import { PaymentData } from '../types/payment';

export const getDefaultPaymentDataCuotas = (nroCuota: string, monto: string): PaymentData => {
  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  };

  const today = new Date();
  const futureDate = new Date();
  futureDate.setMonth(futureDate.getMonth() + 1);

  return {
    codigo_canal_pago: '169',
    id_tx_pago: `TX${Date.now()}`,
    fecha_pago: formatDate(today),
    monto_total_deuda: monto,
    numero_boletas: '1',
    nombre_cliente: 'Cliente Prueba',
    rut_cliente: '123456789',
    email_cliente: 'nicolas@andestic.com',
    id_sub_tx: `1`,
    identificador: `${Date.now()}`,
    boleta: nroCuota,
    monto: monto,
    fecha_vencimiento: formatDate(futureDate)
  };
};
