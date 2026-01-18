import {
  BuildingOffice2Icon,
  UserGroupIcon,
  HeartIcon,
  TrophyIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/tabs"
import { Card, CardContent } from "../../../../components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BuildingOffice2Icon className="mx-auto h-12 w-12 text-blue-600" />
            <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
              About Our Company
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Your company's mission statement or brief introduction goes here.
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              <p className="mt-4 text-lg text-gray-500">
                Your company's story and history goes here. Share your journey,
                challenges, and how you've grown over the years.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-blue-50 border-0">
                <CardContent className="p-6">
                  <TrophyIcon className="h-8 w-8 text-blue-600" />
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold">Founded</h3>
                    <p className="text-gray-600">2020</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-0">
                <CardContent className="p-6">
                  <GlobeAltIcon className="h-8 w-8 text-blue-600" />
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold">Global Reach</h3>
                    <p className="text-gray-600">50+ Countries</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <HeartIcon className="mx-auto h-12 w-12 text-blue-600" />
            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((value) => (
              <Card key={value}>
                <CardContent className="p-6">
                  <RocketLaunchIcon className="h-8 w-8 text-blue-600" />
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">
                    Value {value}
                  </h3>
                  <p className="mt-2 text-gray-500">
                    Description of your company value and how it guides your work.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <UserGroupIcon className="mx-auto h-12 w-12 text-blue-600" />
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Our Team</h2>
          </div>
          <Tabs defaultValue="leadership" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="leadership">Leadership</TabsTrigger>
              <TabsTrigger value="engineering">Engineering</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
            </TabsList>
            {["leadership", "engineering", "design"].map((tab) => (
              <TabsContent key={tab} value={tab}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3].map((member) => (
                    <div key={member} className="text-center">
                      <div className="w-32 h-32 mx-auto rounded-full bg-gray-200" />
                      <h3 className="mt-4 text-xl font-semibold text-gray-900">
                        Team Member Name
                      </h3>
                      <p className="text-gray-500">Position</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  )
}
