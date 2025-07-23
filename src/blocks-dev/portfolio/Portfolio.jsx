const portfolioItems = [
  {
    title: 'Enterprise VoIP System Deployment',
    category: 'VoIP Phone System',
    description: 'Complete VoIP phone system installation for 200+ employee manufacturing facility with call routing, conferencing, and mobile integration.',
    imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
    projectUrl: '#',
    technologies: ['Cisco VoIP', 'SIP Trunking', 'Call Manager'],
  },
  {
    title: 'Multi-Site Security Camera Network',
    category: 'Camera System',
    description: 'Comprehensive IP camera surveillance system across 5 retail locations with centralized monitoring and cloud storage.',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
    projectUrl: '#',
    technologies: ['IP Cameras', 'NVR Systems', 'Cloud Storage'],
  },
  {
    title: 'Corporate Access Control Integration',
    category: 'Card Access Control',
    description: 'Advanced card access control system for corporate headquarters with biometric integration and visitor management.',
    imageUrl: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
    projectUrl: '#',
    technologies: ['RFID Cards', 'Biometric Scanners', 'Access Management'],
  },
  {
    title: 'Data Center Network Infrastructure',
    category: 'Network Cabling',
    description: 'Complete structured cabling solution for new data center including fiber optic backbone and Cat6A workstation connections.',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
    projectUrl: '#',
    technologies: ['Fiber Optic', 'Cat6A Cabling', 'Patch Panels'],
  },
  {
    title: '24/7 IT Infrastructure Management',
    category: 'Managed Services',
    description: 'Comprehensive managed IT services for healthcare organization including monitoring, maintenance, and help desk support.',
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
    projectUrl: '#',
    technologies: ['Remote Monitoring', 'Help Desk', 'Backup Solutions'],
  },
  {
    title: 'Cloud Migration Strategy',
    category: 'IT Consulting',
    description: 'Strategic IT consulting and cloud migration planning for financial services firm transitioning to hybrid infrastructure.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
    projectUrl: '#',
    technologies: ['Cloud Strategy', 'Migration Planning', 'Security Assessment'],
  },
]

export default function Portfolio() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Our Portfolio</h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            See how we've helped businesses enhance their communications, security, and IT infrastructure with our 
            comprehensive technology solutions and expert consulting services.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <article key={item.title} className="flex flex-col items-start">
              <div className="relative w-full">
                <img
                  alt={item.title}
                  src={item.imageUrl}
                  className="aspect-[16/9] w-full rounded-2xl object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {item.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={item.projectUrl}>
                      <span className="absolute inset-0" />
                      {item.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{item.description}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}