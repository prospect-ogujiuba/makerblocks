import {
  ChevronDownIcon,
  CheckCircleIcon,
  StarIcon,
  WrenchScrewdriverIcon,
  QuestionMarkCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline"
import { Button } from "../../../../components/ui/button"
import { Card, CardContent } from "../../../../components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion"

interface Service {
  id: number
  title: string
  description: string
  features: string[]
}

interface FAQ {
  question: string
  answer: string
}

export default function ServicesPage() {
  const services: Service[] = [
    {
      id: 1,
      title: "Service One",
      description: "Description of your first service offering.",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      id: 2,
      title: "Service Two",
      description: "Description of your second service offering.",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      id: 3,
      title: "Service Three",
      description: "Description of your third service offering.",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
  ]

  const faqs: FAQ[] = [
    {
      question: "Common question about your services?",
      answer: "Detailed answer about your services.",
    },
    {
      question: "Another common question?",
      answer: "Another detailed answer.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <WrenchScrewdriverIcon className="mx-auto h-12 w-12 text-blue-600" />
            <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Comprehensive solutions tailored to your needs.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-gray-500">{service.description}</p>
                  <ul className="mt-6 space-y-4">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-blue-500 mt-1" />
                        <span className="ml-2 text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-8 w-full">
                    Learn More
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                  {step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  Step {step}
                </h3>
                <p className="mt-2 text-gray-500">
                  Description of process step {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonial) => (
              <Card key={testimonial}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600">
                    "Testimonial text goes here. Share what your clients love
                    about your services."
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold text-gray-900">Client Name</p>
                    <p className="text-gray-500 text-sm">Position, Company</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <QuestionMarkCircleIcon className="mx-auto h-12 w-12 text-blue-600" />
            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left bg-white px-4 rounded-lg hover:bg-blue-50">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 text-gray-500">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}
