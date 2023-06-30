'use client'
import { Card, Divider, Subtitle,Text } from "@tremor/react"
import CityPicker from "@/components/CityPicker"
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E] p-10 flex flex-col justify-center items-center">
      <Card className="bg-white rounded-xl ">
        <Text className="text-5xl font-bold text-center mb-5 text-gray-600/75">Weather AI</Text>
        <Subtitle className="text-md text-center text-gray-600/50">
          Powered by OpenAI, Next.js 13.3, Tailwind CSS, Tremor 2.0
        </Subtitle>
          <Card className="bg-gradient-to-br from-[#394F68] to-[#183B7E] rounded-xl mt-5">
            <CityPicker></CityPicker>
          </Card>
      </Card>
    </div>
  )
}
