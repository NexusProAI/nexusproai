export default function LoadingSection({ height = "h-96" }) {
  return (
    <div className={`${height} flex items-center justify-center bg-gray-50`}>
      <div className="flex items-center space-x-2">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary-600 border-t-transparent"></div>
        <span className="text-gray-600">Carregando...</span>
      </div>
    </div>
  );
}