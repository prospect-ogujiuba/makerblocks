import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "How reliable is your VoIP phone system?",
    answer:
      "Our VoIP systems offer 99.9% uptime with redundant connections and failover capabilities. We provide crystal-clear call quality, advanced features like call forwarding and voicemail-to-email, and can scale from small offices to enterprise-level deployments.",
  },
  {
    question: 'What type of security cameras do you install?',
    answer:
      'We install professional-grade IP cameras with 4K resolution, night vision, motion detection, and remote monitoring capabilities. Our systems include cloud storage options and mobile app access so you can monitor your business 24/7 from anywhere.',
  },
  {
    question: 'How does card access control improve security?',
    answer:
      'Card access systems provide secure, trackable entry control with detailed logs of who enters and exits your facility. You can easily add or remove access privileges, set time restrictions, and integrate with other security systems for comprehensive protection.',
  },
  {
    question: 'What kind of network cabling do you provide?',
    answer:
      "We install Cat6 and Cat6a cabling for high-speed data transmission, fiber optic cables for long-distance connections, and structured cabling systems that support your current and future networking needs. All installations meet industry standards and include proper documentation.",
  },
  {
    question: "What's included in your managed services?",
    answer:
      'Our managed services include 24/7 network monitoring, regular system updates and patches, backup management, cybersecurity monitoring, helpdesk support, and proactive maintenance. We handle your IT infrastructure so you can focus on running your business.',
  },
  {
    question: 'Do you provide ongoing support after installation?',
    answer:
      "Absolutely. We offer comprehensive support packages including remote troubleshooting, on-site service calls, regular system maintenance, user training, and system upgrades. Our certified technicians are available to ensure your systems run smoothly long after installation.",
  },
]

export default function Faqs() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Frequently asked questions
          </h2>
          <dl className="mt-16 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="size-6 group-[:not([data-open])]:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
