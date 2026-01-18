import {
  ChartBarIcon,
  RocketLaunchIcon,
  ChevronRightIcon,
  ArrowRightIcon,
  ClockIcon,
  UserGroupIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline"
import { Button } from "../../../../components/ui/button"
import { Card, CardContent } from "../../../../components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion"
import { Badge } from "../../../../components/ui/badge"

interface Metric {
  label: string
  value: string
}

interface CaseStudy {
  id: number
  title: string
  category: string
  image: string
  summary: string
  metrics: Metric[]
  duration: string
  industry: string
  results: string[]
}

export default function CaseStudiesPage() {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "Client Success Story",
      category: "Digital Transformation",
      image: "/api/placeholder/800/400",
      summary:
        "How we helped a leading company transform their digital presence",
      metrics: [
        { label: "Increase in Revenue", value: "150%" },
        { label: "User Growth", value: "2.5x" },
        { label: "ROI", value: "300%" },
      ],
      duration: "6 months",
      industry: "Technology",
      results: [
        "Increased user engagement by 200%",
        "Reduced operational costs by 40%",
        "Improved customer satisfaction score to 95%",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ChartBarIcon className="mx-auto h-12 w-12 text-blue-600" />
            <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Case Studies
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Real results and success stories from our client partnerships.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Case Study */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img
                  src={`${window.siteData.siteUrl}/wp-content/plugins/makerblocks/assets/images/extras/Placeholder-Image---Landscape.svg`}
                  alt="Featured case study"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-600 mix-blend-multiply" />
              </div>
              <CardContent className="p-8 lg:p-12">
                <Badge className="bg-blue-100 text-blue-800">
                  Featured Study
                </Badge>
                <h2 className="mt-4 text-3xl font-bold text-gray-900">
                  Transform & Scale
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  How we helped a global enterprise achieve digital
                  transformation and scale their operations.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <RocketLaunchIcon className="h-6 w-6 text-blue-600" />
                    <p className="mt-2 text-2xl font-bold text-gray-900">
                      250%
                    </p>
                    <p className="text-sm text-gray-500">Growth in Revenue</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <UserGroupIcon className="h-6 w-6 text-blue-600" />
                    <p className="mt-2 text-2xl font-bold text-gray-900">1M+</p>
                    <p className="text-sm text-gray-500">New Users</p>
                  </div>
                </div>
                <Button size="lg" className="mt-8">
                  Read Case Study
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <img
                  src={`${window.siteData.siteUrl}/wp-content/plugins/makerblocks/assets/images/extras/Placeholder-Image---Landscape.svg`}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <Badge className="bg-blue-100 text-blue-800">
                    {study.category}
                  </Badge>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">
                    {study.title}
                  </h3>
                  <p className="mt-2 text-gray-500">{study.summary}</p>

                  {/* Key Metrics */}
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {study.metrics.map((metric, index) => (
                      <div key={index} className="text-center">
                        <p className="text-2xl font-bold text-blue-600">
                          {metric.value}
                        </p>
                        <p className="text-xs text-gray-500">{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Project Details */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center text-sm text-gray-500">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      Duration: {study.duration}
                    </div>
                    <Button className="mt-4 w-full">
                      View Case Study
                      <ChevronRightIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Key Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies[0].results.map((result, index) => (
              <div key={index} className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-blue-500 mt-1" />
                <p className="ml-3 text-lg text-gray-600">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Common Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {[1, 2, 3].map((item) => (
              <AccordionItem key={item} value={`item-${item}`}>
                <AccordionTrigger className="text-left bg-white px-4 rounded-lg hover:bg-blue-50">
                  Frequently asked question {item}?
                </AccordionTrigger>
                <AccordionContent className="px-4 text-gray-500">
                  Detailed answer to the frequently asked question goes here.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
