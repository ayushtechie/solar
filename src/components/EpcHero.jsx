import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Engineering',
    description:
      'Run the feasibility test and do the site assessment and selection of the technology to be practised for a particular project, and check if the site requires any interconnection or not.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Procurement',
    description:
      'Obtaining required resources for the project like clearance and commissioning, equipment selection and installation under a specified time frame and budget given by a client.',
    icon: LockClosedIcon,
  },
  {
    name: 'Construction',
    description:
      'Supervision and monitoring services, construction related to a solar power plant, construction support, project planning and operations management, and preparation of a detailed proposal with an action plan and budget.',
    icon: ArrowPathIcon,
  },
]

export default function EpcHero() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">E P C</h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            EPC Contractor
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          EPC refers to Engineering, procurement and civil construction. In the solar industry, EPC companies are those who provide a one-stop solution for everything solar. With that, you don’t have to go to multiple vendors to assemble numerous components of a solar plant, EPC providers do that job for you. It is crucial for the successful installation of a solar power plant, especially when it is a large-scale project in MW.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16 lg:p-0">
                <dt className="lg:flex gap-x-4 text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute lg:relative left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mx-auto max-w-4xl lg:text-center">
        <p className="mt-6 text-lg leading-8 text-gray-600">
        These three components of EPC are essential well-connected pillars of a successful solar power plant. They take care of the complete lifespan of a project. So, industries have to be very careful in choosing the right one, as it will be a long-term partnership of 25 years. The EPCs should be skilled, resourceful, dedicated and professional in their approach.
          </p>
          </div>
      </div>
    </div>
  )
}
