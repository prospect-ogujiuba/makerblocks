import { useState } from "react"
import {
  ShoppingBagIcon,
  FunnelIcon,
  StarIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"
import { Button } from "../../../../components/ui/button"
import { Card, CardContent } from "../../../../components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../../components/ui/sheet"

interface Filter {
  id: string
  name: string
  options: string[]
}

interface Product {
  id: number
  name: string
  price: number
  rating: number
  image: string
  category: string
  description: string
}

export default function ShopPage() {
  const [cartItems, setCartItems] = useState<Product[]>([])
  const [cartOpen, setCartOpen] = useState(false)

  const categories = ["All", "New Arrivals", "Featured", "Sale"]
  const filters: Filter[] = [
    {
      id: "category",
      name: "Category",
      options: ["Electronics", "Clothing", "Accessories", "Home"],
    },
    {
      id: "price",
      name: "Price Range",
      options: ["Under $50", "$50 - $100", "$100 - $200", "Over $200"],
    },
  ]

  const products: Product[] = [
    {
      id: 1,
      name: "Product One",
      price: 99.99,
      rating: 4.5,
      image: "/api/placeholder/300/300",
      category: "Electronics",
      description: "Product description goes here.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ShoppingBagIcon className="mx-auto h-12 w-12 text-blue-600" />
            <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Shop
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Discover our collection of premium products.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Sidebar Filters */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-4">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Filters
              </h2>
              <Accordion type="multiple" className="w-full">
                {filters.map((filter) => (
                  <AccordionItem key={filter.id} value={filter.id}>
                    <AccordionTrigger className="text-sm font-medium text-gray-900 hover:bg-gray-50 px-4 rounded-lg">
                      {filter.name}
                    </AccordionTrigger>
                    <AccordionContent className="px-4">
                      <div className="space-y-4">
                        {filter.options.map((option) => (
                          <div key={option} className="flex items-center">
                            <input
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <label className="ml-3 text-sm text-gray-600">
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-9">
            {/* Mobile Filters */}
            <div className="lg:hidden mb-6">
              <Button variant="ghost" className="text-gray-600">
                <FunnelIcon className="h-5 w-5 mr-2" />
                Filters
              </Button>
            </div>

            {/* Category Tabs */}
            <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="ghost"
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-500 text-sm">
                Showing {products.length} results
              </p>
              <select className="text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative">
                    <img
                      src={`${window.siteData.siteUrl}/wp-content/plugins/makerblocks/assets/images/extras/Placeholder-Image---Landscape.svg`}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute top-4 right-4 rounded-full"
                    >
                      <ShoppingBagIcon className="h-5 w-5 text-gray-600" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-gray-500">{product.description}</p>
                    <div className="mt-2 flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-500">
                        ({product.rating})
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-lg font-medium text-gray-900">
                        ${product.price}
                      </p>
                      <Button variant="link" className="text-blue-600">
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center">
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                <Button variant="outline" className="rounded-l-md rounded-r-none">
                  Previous
                </Button>
                <Button variant="outline" className="rounded-none">
                  1
                </Button>
                <Button variant="outline" className="rounded-none">
                  2
                </Button>
                <Button variant="outline" className="rounded-r-md rounded-l-none">
                  Next
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Shopping Cart Sheet */}
      <Sheet open={cartOpen} onOpenChange={setCartOpen}>
        <SheetTrigger asChild>
          <Button
            variant="secondary"
            size="icon"
            className="fixed top-4 right-4 rounded-full shadow-lg"
          >
            <ShoppingBagIcon className="h-6 w-6 text-gray-600" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Shopping Cart</SheetTitle>
          </SheetHeader>
          <div className="mt-4">
            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                <div className="mt-4 border-t pt-4">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>$0.00</p>
                  </div>
                  <Button className="mt-4 w-full">
                    Checkout
                  </Button>
                </div>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
