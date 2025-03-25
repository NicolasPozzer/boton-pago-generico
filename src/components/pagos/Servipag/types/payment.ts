export interface PaymentData {
  codigo_canal_pago: string;
  id_tx_pago: string;
  fecha_pago: string;
  monto_total_deuda: string;
  numero_boletas: string;
  nombre_cliente: string;
  rut_cliente: string;
  email_cliente: string;
  id_sub_tx: string;
  identificador: string;
  boleta: string;
  monto: string;
  fecha_vencimiento: string;
}

export interface PaymentResponse {
  xml: string;
  servipag_url: string;
}

export interface ReceptionResponse {
  id_trx_servipag: string;
  id_tx_cliente: string;
  estado_pago: string;
  mensaje: string;
  xml: string;
}

export interface TransactionStatus {
  id_tx_cliente: string;
  estado: 'PENDIENTE' | 'APROBADO' | 'RECHAZADO' | 'ERROR';
  fecha_actualizacion?: string;
  detalle?: string;
  error?: string;
}
