import React from "react";
import Tarjeta from "@/components/Tarjeta";
import calcula from "@/lib/calculos"  // En lugar de calcula puedes poner el nombre que desees

//Aqui saldra el resultado de todo los datos
function page() {
  console.log('CALCULO1: ', calcula.calculo1(4));

  return (
    <div className="my-10">
      <div className="flex flex-col items-center justify-center -mt-10 h-[300vh] sm:h-[100vh] text-blue-500">
        <Tarjeta>
          <div className="bg-transparent py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center text-3xl mb-10">
                Verano
              </div>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 text-gray-600 dark:text-gray-100">
                    Transactions every 24 hours
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight dark:text-gray-100 text-gray-900 sm:text-5xl">
                    { calcula.calculo1(4) }
                  </dd>
                </div>
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 text-gray-600 dark:text-gray-400">
                    Assets under holding
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight dark:text-gray-100 text-gray-900 sm:text-5xl">
                    $119 trillion
                  </dd>
                </div>
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 text-gray-600">
                    New users annually
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight dark:text-gray-100 text-gray-900 sm:text-5xl">
                    46,000
                  </dd>
                </div>
              </dl>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 dark:text-gray-100 text-gray-600">
                    Transactions every 24 hours
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight dark:text-gray-100 text-gray-900 sm:text-5xl">
                    44 million
                  </dd>
                </div>
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 dark:text-gray-100 text-gray-600">
                    Assets under holding
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight dark:text-gray-100 text-gray-900 sm:text-5xl">
                    $119 trillion
                  </dd>
                </div>
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 dark:text-gray-100 text-gray-600">
                    New users annually
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight dark:text-gray-100 text-gray-900 sm:text-5xl">
                    46,000
                  </dd>
                </div>
              </dl>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 dark:text-gray-100 text-gray-600">
                    Transactions every 24 hours
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight dark:text-gray-100 text-gray-900 sm:text-5xl">
                    44 million
                  </dd>
                </div>
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 dark:text-gray-100 text-gray-600">
                    Assets under holding
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight dark:text-gray-100 text-gray-900 sm:text-5xl">
                    $119 trillion
                  </dd>
                </div>
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 dark:text-gray-100 text-gray-600">
                    New users annually
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight dark:text-gray-100 text-gray-900 sm:text-5xl">
                    46,000
                  </dd>
                </div>
              </dl>
              <hr className="my-8"></hr>
              <div className="mx-auto max-w-2xl text-center text-3xl mb-10">
                Invierno
              </div>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 dark:text-gray-100 text-gray-600">
                    Transactions every 24 hours
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight dark:text-gray-100 text-gray-900 sm:text-5xl">
                    44 million
                  </dd>
                </div>
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 dark:text-gray-100 text-gray-600">
                    Assets under holding
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight dark:text-gray-100 text-gray-900 sm:text-5xl">
                    $119 trillion
                  </dd>
                </div>
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 dark:text-gray-100 text-gray-600">
                    New users annually
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight dark:text-gray-100 text-gray-900 sm:text-5xl">
                    46,000
                  </dd>
                </div>
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 dark:text-gray-100 text-gray-600">
                    New users annually
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight dark:text-gray-100 text-gray-900 sm:text-5xl">
                    46,000
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Tarjeta>
      </div>
    </div>
  );
}

export default page;
