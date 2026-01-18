import { useState, type ChangeEvent } from "react"
import {
  DocumentTextIcon,
  DocumentArrowDownIcon,
  PlayCircleIcon,
  BookOpenIcon,
  MagnifyingGlassIcon,
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
  TagIcon,
} from "@heroicons/react/24/outline"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/tabs"
import { Card, CardContent } from "../../../../components/ui/card"
import { Input } from "../../../../components/ui/input"
import { Badge } from "../../../../components/ui/badge"
import { Button } from "../../../../components/ui/button"

interface Category {
  name: string
  count: number
  value: string
}

interface Resource {
  id: number
  title: string
  description: string
  type: string
  icon: React.ComponentType<{ className?: string }>
  tags: string[]
  downloadUrl?: string
}

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const categories: Category[] = [
    { name: "All Resources", count: 12, value: "all" },
    { name: "Documentation", count: 4, value: "docs" },
    { name: "Tutorials", count: 3, value: "tutorials" },
    { name: "Downloads", count: 5, value: "downloads" },
  ]

  const resources: Resource[] = [
    {
      id: 1,
      title: "Getting Started Guide",
      description: "Learn the basics of our platform",
      type: "Documentation",
      icon: BookOpenIcon,
      tags: ["Beginner", "Guide"],
      downloadUrl: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <DocumentTextIcon className="mx-auto h-12 w-12 text-blue-600" />
            <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Resources
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Everything you need to get started and be successful with our
              platform.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search resources..."
            className="w-full pr-10"
            value={searchQuery}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="all" className="w-full">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <TabsList className="flex flex-col h-auto w-full space-y-1 bg-transparent">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.value}
                    value={category.value}
                    className="w-full justify-between px-3 py-2 text-sm font-medium rounded-lg data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600"
                  >
                    <span>{category.name}</span>
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Content Area */}
            <div className="mt-6 lg:mt-0 lg:col-span-9">
              {categories.map((category) => (
                <TabsContent
                  key={category.value}
                  value={category.value}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {resources.map((resource) => (
                    <Card key={resource.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <resource.icon className="h-8 w-8 text-blue-600" />
                          <div className="ml-4 flex-1">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {resource.title}
                            </h3>
                            <p className="mt-1 text-gray-500">
                              {resource.description}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {resource.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-800">
                                  <TagIcon className="h-3 w-3 mr-1" />
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <div className="mt-4 flex items-center space-x-4">
                              {resource.downloadUrl && (
                                <Button variant="link" size="sm" className="text-blue-600 p-0">
                                  <ArrowDownTrayIcon className="h-4 w-4 mr-1" />
                                  Download
                                </Button>
                              )}
                              <Button variant="link" size="sm" className="text-blue-600 p-0">
                                <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-1" />
                                Learn More
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </div>

      {/* Featured Resources */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Featured Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <DocumentTextIcon className="h-8 w-8 text-blue-600" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  Documentation
                </h3>
                <p className="mt-2 text-gray-500">
                  Comprehensive guides and API references
                </p>
                <Button variant="link" className="mt-4 p-0 text-blue-600">
                  Browse Docs →
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <PlayCircleIcon className="h-8 w-8 text-blue-600" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  Video Tutorials
                </h3>
                <p className="mt-2 text-gray-500">
                  Step-by-step video guides and tutorials
                </p>
                <Button variant="link" className="mt-4 p-0 text-blue-600">
                  Watch Now →
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <DocumentArrowDownIcon className="h-8 w-8 text-blue-600" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  Downloads
                </h3>
                <p className="mt-2 text-gray-500">
                  Templates, tools, and other resources
                </p>
                <Button variant="link" className="mt-4 p-0 text-blue-600">
                  Download →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
