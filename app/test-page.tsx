export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-metropolis text-primary-500 mb-4 font-bold">
        Тест шрифта Metropolis
      </h1>
      <p className="text-xl font-metropolis text-white mb-4">
        Этот текст должен быть написан шрифтом Metropolis Regular
      </p>
      <p className="text-lg font-metropolis text-gray-300 mb-2 font-light">
        Metropolis Light
      </p>
      <p className="text-lg font-metropolis text-gray-300 mb-2 font-medium">
        Metropolis Medium
      </p>
      <p className="text-lg font-metropolis text-gray-300 mb-2 font-semibold">
        Metropolis SemiBold
      </p>
      <p className="text-lg font-sans text-gray-300">
        Этот текст написан стандартным шрифтом Inter
      </p>
    </div>
  )
}
