import { LoaderFunction } from "@remix-run/node"
import { Params, useLoaderData } from "@remix-run/react"

export const loader: LoaderFunction = async ({ context, params, request }) => {

  const { wuId } = params as Params<"wuId">

  console.log(params)

  return {
    wuId
  }

}

const Wu = () => {
  const { wuId } = useLoaderData<typeof loader>()

  return <div>wuId: {wuId}</div>
}

export default Wu