import { Check } from 'lucide-react'

interface ReceiptProps {
  orderNumber: string;
  amount: string;
  name: string;
  email: string;
  region: string;
  date: string;
}

export function Recibo({ orderNumber, amount, name, email, region, date }: ReceiptProps) {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white print:shadow-none">
      <div className="text-center space-y-4 mb-8">
        <h2 className="text-2xl font-bold">¡Listo! Tu pago ha sido verificado.</h2>
        <div className="flex justify-center">
          <div className="bg-yellow-100 rounded-full p-4">
            <Check className="h-8 w-8 text-yellow-400" />
          </div>
        </div>
        <p className="text-gray-600">Gracias por confiar en nosotros.</p>
      </div>

      <div className="space-y-4 border-t border-b py-6 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">N° de pedido</span>
          <span className="font-medium">{orderNumber}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Monto Pagado</span>
          <span className="font-medium">{amount}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Nombre</span>
          <span className="font-medium">{name}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Correo electrónico</span>
          <span className="font-medium">{email}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Región</span>
          <span className="font-medium">{region}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Fecha compra</span>
          <span className="font-medium">{date}</span>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 print:hidden">
        Este comprobante ha sido generado automáticamente
      </div>
    </div>
  )
}

