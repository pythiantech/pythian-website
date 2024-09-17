'use client'

import { useState } from "react"
import { RadarIcon, ShieldIcon, NetworkIcon, EyeIcon, ShipIcon, BrainIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import LearnMoreForm from '../app/components/LearnMoreForm';
import Image from 'next/image'

export function PythtechWebsite() {
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    reason: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate sending email
    await new Promise(resolve => setTimeout(resolve, 1000))
    // In a real application, you would send the form data to a server here
    console.log("Sending email to info@pythtech.com with data:", formData)
  }

  const openLearnMore = () => setIsLearnMoreOpen(true);
  const closeLearnMore = () => setIsLearnMoreOpen(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image src="/pythtech_logo.png" alt="Pythtech Logo" className="h-20 w-40" />
            <div>
              {/* <h1 className="text-2xl font-bold text-blue-600">Pythtech</h1>
              <p className="text-sm text-gray-600">Pvt Ltd</p> */}
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Maritime Data Analytics Service (MDAS)</h2>
            <p className="text-xl mb-8">Revolutionizing maritime intelligence with AI-driven risk profiling</p>
            <p className="text-xl mb-8">Enhance maritime domain awareness with AI-driven operational precision and actionable insights</p>
            <Button 
              onClick={openLearnMore}
              variant="outline"
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Learn More
            </Button>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg hover:bg-blue-50">
                <RadarIcon className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Predictive Risk Intelligence</h3>
                <p>Enhance maritime domain awareness with AI-driven operational precision and actionable insights.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg hover:bg-green-50">
                <ShieldIcon className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Safeguard Borders & Assets</h3>
                <p>Expose maritime threats in real-time and make smarter operational decisions to protect your borders.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg hover:bg-purple-50">
                <NetworkIcon className="w-12 h-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Defense & Intelligence</h3>
                <p>Optimize operational decision-making and strategic planning with our advanced AI technology.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg hover:bg-red-50">
                <EyeIcon className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Comprehensive Sanctions Screening Solutions</h3>
                <p>Ensure compliance with comprehensive sanctions screening for wet/dry bulk and containers.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg hover:bg-yellow-50">
                <ShipIcon className="w-12 h-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ocean-Freight Visibility</h3>
                <p>Gain real-time visibility for bulk and container shipments with 99% coverage of all ocean shipments.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg hover:bg-indigo-50">
                <BrainIcon className="w-12 h-12 text-indigo-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">AI-Powered APIs</h3>
                <p>A rich suite of AI-powered APIs for Areas, Vessels, Companies & Shipments.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="predictive-risk-insights" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold mb-4">Predictive Risk Intelligence</h2>
                <p className="mb-4">Elevate maritime domain awareness with AI-powered operational accuracy, delivering actionable insights and forward-looking risk assessments.</p>
                <p>Our state-of-the-art technology integrates diverse data streams, including AIS (Automatic Identification System) feeds, real-time weather patterns, and satellite imagery, to create detailed and comprehensive risk profiles for vessels across the globe. By leveraging these rich data sources, we provide predictive risk recommendations that empower you to make informed decisions with unparalleled confidence.</p>
              </div>
              <div className="md:w-1/2">
                <Image src="/predictive_risk.png?height=300&width=400" alt="Predictive Risk Insights" className="rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </section>

        <section id="protect-borders-assets" className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
                <h2 className="text-3xl font-bold mb-4">Safeguard Borders & Assets</h2>
                <p className="mb-4">Embrace a proactive, intelligence-driven strategy to fortify your borders and protect critical assets. Our advanced AI-enabled technology empowers you to detect and neutralize maritime threats as they emerge in real time, allowing you to stay ahead of potential risks and bad actors before they encroach on your national or operational security.</p>
                <ul className="list-disc list-inside">
                  <li><strong>AI-Powered Vessel Screening</strong>: Thoroughly screen every incoming vessel for behavioral risk indicators using advanced AI, analyzing patterns, past voyage data, and detecting anomalies that may signify potential threats.</li>
                  <li><strong>Dynamic Cargo Tracking</strong>: Monitor cargo movements with real-time route tracking and voyage milestones, ensuring precision and the ability to flag any suspicious deviations or detours across the global supply chain.</li>
                  <li><strong>Ownership Network Analysis</strong>: Uncover hidden ownership networks by mapping out the entire web of stakeholders, from beneficial owners to corporate entities and operational managers, to reveal potential risks within the trade supply chain.</li>
                  <li><strong>Informed Operational Decisions</strong>: Leverage these insights to make smarter, more strategic decisions, protecting borders, securing assets, and maintaining complete control over your maritime domain.</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <Image src="/border.png?height=300&width=400" alt="Protect Borders & Assets" className="rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </section>

        <section id="defense-intelligence" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold mb-4">Defense & Intelligence</h2>
                <p className="mb-4">Leverage the power of advanced AI to enhance the efficiency and effectiveness of your defense and intelligence operations. Our cutting-edge technology is designed to optimize operational decision-making and strategic planning, ensuring that you are always one step ahead of potential threats. Whether it&apos;s safeguarding national interests or tracking vessels globally, our solutions provide the critical insights you need to act decisively and confidently..</p>
                <ul className="list-disc list-inside">
                  <li><strong>Enhance Strategic Missions</strong>: Improve the execution of critical defense missions and safeguard national interests using advanced AI-driven insights and strategic data analysis.</li>
                  <li><strong>Lifetime Vessel Tracking</strong>: Track vessels across their entire operational lifespan using patented entity resolution technology to ensure continuous monitoring and risk assessment.</li>
                  <li><strong>Predictive Intelligence & Remote Sensing</strong>: Combine predictive intelligence with cutting-edge remote sensing technology to forecast potential threats and provide actionable insights for timely interventions.</li>
                  <li><strong>Real-Time Behavioral Outliers Detection</strong>: Identify vessels exhibiting unusual or risky behavior in real time, allowing for quick, decisive action in safeguarding defense and intelligence operations.</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <Image src="/defense.png?height=300&width=400" alt="Defense & Intelligence" className="rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </section>

        <section id="sanctions-screening" className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
                <h2 className="text-3xl font-bold mb-4">Comprehensive Sanctions Screening Solutions</h2>
                <p className="mb-4">In today&apos;s complex global trade environment, ensuring compliance with sanctions is more critical than ever. Our advanced sanctions screening platform offers robust tools to monitor and enforce compliance across the entire supply chain. Whether you are dealing with wet or dry bulk carriers, container shipments, or non-maritime entities, our system is designed to deliver full-spectrum risk management, keeping your operations safe and compliant.</p>

                <p className="mb-4">With real-time screening capabilities, fully customizable risk indicators, and seamless scalability, our solution ensures that every entity and transaction is thoroughly vetted, helping you avoid regulatory penalties while maintaining the smooth flow of operations.</p>
                <ul className="list-disc list-inside">
                  <li><strong>End-to-End Due Diligence Across the Supply Chain</strong>: Our platform conducts comprehensive due diligence at every step of the supply chain, ensuring that all maritime and non-maritime entities are screened for compliance. From the origin of goods to the final delivery, our system flags any potential risks related to sanctions, providing you with a clear and actionable risk profile for each transaction.</li>
                  <li><strong>Scalable and Configurable Risk Indicators</strong>: We offer fully scalable and highly configurable risk indicators, allowing you to tailor the system to the specific needs of your operation. Whether screening large fleets or smaller shipments, you can customize risk thresholds and parameters to align with your internal compliance policies and regulatory obligations.</li>
                  <li><strong>Real-Time Monitoring and Alerts</strong>: Stay ahead of potential compliance violations with real-time monitoring and instant alerts. Our system continuously tracks vessel movements and entity interactions, alerting you to any sanction violations or high-risk behaviors before they escalate into regulatory issues.</li>
                  <li><strong>Global Coverage for Maritime and Non-Maritime Entitiess</strong>: Our solution covers not only maritime operations such as wet/dry bulk and container vessels but also extends to non-maritime entities like suppliers, logistics partners, and financial institutions. This comprehensive reach ensures that every part of your supply chain is fully compliant with international sanctions regulations.</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <Image src="/sanctions.png?height=300&width=400" alt="Sanctions Screening" className="rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </section>

        <section id="ocean-freight-visibility" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold mb-4">Ocean-Freight Visibility</h2>
                <p className="mb-4">Achieve unparalleled real-time visibility into both bulk and container shipments with our cutting-edge tracking solution. Our system ensures you have full oversight of your cargo&apos;s journey, from the point of origin to the final destination. With robust global coverage and automated updates, you can stay informed on every movement and event, allowing for proactive decision-making and operational efficiency.</p>
                <ul className="list-disc list-inside">
                  <li><strong>99% Global Shipment Coverage:</strong> Our system provides near-total visibility, tracking 99% of all ocean shipments worldwide, ensuring that you can monitor cargo no matter where it is.</li>
                  <li><strong>Over 95% Milestone Tracking:</strong> Get detailed updates at every critical juncture of the shipment journey, from Gate In at the Port of Loading (POL) to Gate Out at the Port of Discharge (POD), covering over 95% of key milestones.</li>
                  <li><strong>100% Vessel Event Monitoring:</strong> We track every single vessel in real time, providing you with instant updates on all events and movements, ensuring no gaps in shipment tracking.</li>
                  <li><strong>Automated Delay Notifications:</strong> Our system automatically analyzes shipment data and provides reasons for any delays, enabling you to quickly address issues and keep your supply chain running smoothly.</li>
              </ul>
              </div>
              <div className="md:w-1/2">
                <Image src="/ofv.png?height=300&width=400" alt="Ocean-Freight Visibility" className="rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </section>

        <section id="ai-powered-analytics" className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
                <h2 className="text-3xl font-bold mb-4">AI-Powered APIs</h2>
                <p className="mb-4">Use our AI-powered APIs to access a rich suite of data and insights for maritime operations in your own applications.</p>
                <ul className="list-disc list-inside">
                  <li><strong>Due Dilligence/Compliance</strong>: Streamline and strengthen your due diligence and investigation workflows by integrating AI-powered insights and clear go/no-go risk recommendations for the global merchant fleet. By selecting only the insights relevant to your needs, your organization can save valuable time and resources. This allows your team to make faster, more informed decisions, helping to safeguard your business from potential reputational and financial risks in the future.</li>
                  <li><strong>Behavioral Analysis API</strong>: Boost your analytics with real-time, AI-driven maritime behavioral insights that enable you to swiftly uncover new business opportunities and potential targets. The Behavioral Analysis API seamlessly integrates Windward&apos;s vessel activity data, the backbone of our algorithms, into your internal IT systems, offering customizable data views by timeline or geographical area.By tracking critical behaviors like dark activities, ship-to-ship transfers, port visits, route deviations, loitering, and more, you can enhance your existing models and build the foundation for advanced applications, driving smarter and more informed decision-making.</li>
                  <li><strong>Homeland Security API</strong>: The Homeland Security Insights API provides both historical and real-time data in a single response, complete with customizable, automated alerts. You can monitor behavioral changes over time, detect patterns, and discover new targets based on anomalous activities and geographic relevance. Common applications include integration with UAVs, C4I platforms, and intelligence research systems, enabling enhanced threat detection and proactive response strategies.</li>
                  <li><strong>Port Insights API</strong>: As the maritime domain becomes more complex and challenging, shipping stakeholders are expected to optimize port operations, minimize congestion and strategize voyage planning while maintaining profitability. With MDAS&apos;s integrated port insights, users will be able to get real-time updates about the most economical ports, their current congestion status and better plan ahead at what time and where their vessels will be loaded or discharged.</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <Image src="/api.png?height=300&width=400" alt="AI-Powered Analytics" className="rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Revolutionize Your Maritime Intelligence?</h2>
            <p className="text-xl mb-8">Contact us today to learn how Pythtech can transform your maritime operations with AI-driven insights.</p>
            <Button 
              onClick={openLearnMore}
              variant="outline"
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Get Started
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">&copy; 2023 Pythtech Pvt. Ltd. All rights reserved.</p>
          <address className="not-italic">
            C-64 East of Kailash<br />
            New Delhi - 110065<br />
            #9999099022<br />
            <a href="mailto:info@pythtech.com" className="text-blue-300 hover:text-blue-100">info@pythtech.com</a>
          </address>
        </div>
      </footer>

      <LearnMoreForm isOpen={isLearnMoreOpen} onClose={closeLearnMore} />
    </div>
  )
}