import React, { useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Search,
  Shuffle,
} from "lucide-react";

const modules = [
  {
    id: 1,
    title: "Module 1 · Introduction to the Cloud",
    cards: [
      {
        q: "What is cloud computing?",
        a: "The on-demand delivery of IT resources over the internet with pay-as-you-go pricing.",
      },
      {
        q: "What are key benefits of cloud computing?",
        a: "It can replace large upfront infrastructure investments with variable costs, provide scalability, improve speed and agility, and enable rapid global deployment.",
      },
      {
        q: "What is an AWS Region?",
        a: "A geographic area where AWS operates infrastructure. Each Region contains multiple isolated Availability Zones.",
      },
      {
        q: "What is an Availability Zone?",
        a: "One or more discrete data centers with redundant power, networking, and connectivity inside an AWS Region.",
      },
      {
        q: "What does elasticity mean in cloud computing?",
        a: "The ability to automatically or quickly add and remove resources as demand changes.",
      },
      {
        q: "What is the AWS Shared Responsibility Model?",
        a: "AWS is responsible for security OF the cloud. Customers are responsible for security IN the cloud, with responsibilities varying by service.",
      },
    ],
  },

  {
    id: 2,
    title: "Module 2 · Compute in the Cloud",
    cards: [
      {
        q: "What is Amazon EC2?",
        a: "Amazon Elastic Compute Cloud provides resizable virtual servers called EC2 instances.",
      },
      {
        q: "What is an EC2 instance?",
        a: "A virtual server running in the AWS Cloud.",
      },
      {
        q: "Why use EC2 instead of buying physical servers?",
        a: "EC2 lets you provision computing capacity quickly, scale it when requirements change, and avoid purchasing physical hardware upfront.",
      },
      {
        q: "What is Amazon EC2 Auto Scaling?",
        a: "A service that automatically adds or removes EC2 instances according to conditions you define.",
      },
      {
        q: "What does an Elastic Load Balancer do?",
        a: "It distributes incoming application traffic across multiple targets, such as EC2 instances.",
      },
      {
        q: "What is the difference between vertical and horizontal scaling?",
        a: "Vertical scaling changes the capacity of an individual resource. Horizontal scaling adds or removes resources such as EC2 instances.",
      },
    ],
  },

  {
    id: 3,
    title: "Module 3 · Exploring Compute Services",
    cards: [
      {
        q: "What is serverless computing?",
        a: "A cloud model where you run applications without provisioning or managing the underlying servers.",
      },
      {
        q: "What is AWS Lambda?",
        a: "A serverless compute service that runs code in response to events while AWS manages the underlying infrastructure.",
      },
      {
        q: "EC2 vs Lambda?",
        a: "EC2 gives you greater control over virtual servers. Lambda abstracts server management so you can focus primarily on your code.",
      },
      {
        q: "What is Amazon ECS?",
        a: "Amazon Elastic Container Service is an AWS service for running and managing containerized applications.",
      },
      {
        q: "What is Amazon EKS?",
        a: "Amazon Elastic Kubernetes Service is a managed Kubernetes service.",
      },
      {
        q: "What is AWS Fargate?",
        a: "A serverless compute engine for containers that works with services such as Amazon ECS and Amazon EKS.",
      },
      {
        q: "What is AWS Elastic Beanstalk?",
        a: "A service for deploying and scaling web applications while AWS manages infrastructure tasks such as capacity provisioning and load balancing.",
      },
    ],
  },

  {
    id: 4,
    title: "Module 4 · Going Global",
    cards: [
      {
        q: "Why does AWS have multiple Regions?",
        a: "Multiple Regions help customers deploy workloads closer to users, meet certain geographic requirements, and design resilient architectures.",
      },
      {
        q: "Why deploy across multiple Availability Zones?",
        a: "It improves availability and fault tolerance because an application is less dependent on a single location.",
      },
      {
        q: "What is an AWS edge location?",
        a: "A site AWS uses to deliver content and certain services closer to users.",
      },
      {
        q: "What is Amazon CloudFront?",
        a: "AWS's content delivery network service for delivering content through a global network of edge locations.",
      },
      {
        q: "What is the AWS Management Console?",
        a: "A browser-based graphical interface used to access and manage AWS services.",
      },
      {
        q: "What is the AWS CLI?",
        a: "The AWS Command Line Interface lets you manage AWS services using commands and scripts.",
      },
      {
        q: "What does AWS CloudFormation do?",
        a: "It provisions and manages AWS resources from templates, enabling Infrastructure as Code.",
      },
    ],
  },

  {
    id: 5,
    title: "Module 5 · Networking",
    cards: [
      {
        q: "What is an Amazon VPC?",
        a: "A logically isolated virtual network in AWS where you can launch and control AWS resources.",
      },
      {
        q: "What is a subnet?",
        a: "A range of IP addresses within a VPC used to organize and isolate resources.",
      },
      {
        q: "Public subnet vs private subnet?",
        a: "A public subnet is designed for resources requiring direct internet connectivity. A private subnet is commonly used for internal resources that should not be directly reachable from the internet.",
      },
      {
        q: "What is an internet gateway?",
        a: "A VPC component that enables communication between resources in a VPC and the internet when routing and security rules permit it.",
      },
      {
        q: "What is a security group?",
        a: "A stateful virtual firewall that controls inbound and outbound traffic for supported AWS resources.",
      },
      {
        q: "What is a network ACL?",
        a: "A stateless network security control that operates at the subnet level.",
      },
      {
        q: "What is AWS Direct Connect?",
        a: "A service that provides a dedicated private network connection between your environment and AWS.",
      },
    ],
  },

  {
    id: 6,
    title: "Module 6 · Storage",
    cards: [
      {
        q: "What is Amazon S3?",
        a: "A scalable object storage service that stores data as objects inside buckets.",
      },
      {
        q: "What type of storage is Amazon S3?",
        a: "Object storage.",
      },
      {
        q: "What is Amazon EBS?",
        a: "Amazon Elastic Block Store provides block storage volumes commonly used with EC2 instances.",
      },
      {
        q: "What type of storage is Amazon EBS?",
        a: "Block storage.",
      },
      {
        q: "What is Amazon EFS?",
        a: "Amazon Elastic File System is a managed, elastic file system that can be shared across multiple compute resources.",
      },
      {
        q: "S3 vs EBS vs EFS?",
        a: "S3 provides object storage, EBS provides block storage, and EFS provides shared file storage.",
      },
      {
        q: "What are S3 storage classes?",
        a: "Different storage options designed for different access patterns, performance requirements, and cost objectives.",
      },
    ],
  },

  {
    id: 7,
    title: "Module 7 · Databases",
    cards: [
      {
        q: "What is Amazon RDS?",
        a: "A managed relational database service that simplifies common database administration tasks.",
      },
      {
        q: "What is Amazon DynamoDB?",
        a: "A serverless, fully managed NoSQL key-value database designed for low-latency performance at scale.",
      },
      {
        q: "What is Amazon Aurora?",
        a: "A cloud-optimized relational database compatible with MySQL and PostgreSQL.",
      },
      {
        q: "When is a relational database useful?",
        a: "When applications require structured relationships, SQL queries, and relational transactions.",
      },
      {
        q: "When might DynamoDB be useful?",
        a: "When an application needs a highly scalable, low-latency NoSQL key-value database without managing servers.",
      },
      {
        q: "What is Amazon Redshift?",
        a: "A managed cloud data warehouse service designed for large-scale analytics.",
      },
    ],
  },

  {
    id: 8,
    title: "Module 8 · AI/ML & Data Analytics",
    cards: [
      {
        q: "What is Amazon SageMaker AI?",
        a: "A managed AWS service for building, training, and deploying machine learning models.",
      },
      {
        q: "What is Amazon Bedrock?",
        a: "A managed service for building generative AI applications using foundation models and related tools.",
      },
      {
        q: "What is Amazon Athena?",
        a: "A serverless interactive query service that can analyze data stored in Amazon S3 using SQL.",
      },
      {
        q: "What is Amazon QuickSight?",
        a: "A cloud business intelligence service for dashboards, visualizations, and analytics.",
      },
      {
        q: "What is Amazon Redshift primarily used for?",
        a: "Data warehousing and analytics across large datasets.",
      },
      {
        q: "What is generative AI?",
        a: "Artificial intelligence capable of generating new content such as text, images, audio, or code based on learned patterns.",
      },
    ],
  },

  {
    id: 9,
    title: "Module 9 · Security",
    cards: [
      {
        q: "What is AWS IAM?",
        a: "AWS Identity and Access Management controls authentication and authorization to AWS resources.",
      },
      {
        q: "What is the principle of least privilege?",
        a: "Grant only the permissions required to perform a task and no more.",
      },
      {
        q: "Why should MFA be enabled?",
        a: "Multi-factor authentication adds another authentication factor beyond a password and reduces the risk of unauthorized access.",
      },
      {
        q: "What is an IAM role?",
        a: "An AWS identity with permissions that can be assumed temporarily by users, applications, or AWS services.",
      },
      {
        q: "What is AWS KMS?",
        a: "AWS Key Management Service helps create and control cryptographic keys used to protect data.",
      },
      {
        q: "What does AWS Shield protect against?",
        a: "Distributed denial-of-service, or DDoS, attacks.",
      },
      {
        q: "What does AWS WAF do?",
        a: "AWS Web Application Firewall helps protect web applications by filtering HTTP and HTTPS requests using configurable rules.",
      },
    ],
  },

  {
    id: 10,
    title: "Module 10 · Monitoring, Compliance & Governance",
    cards: [
      {
        q: "What is Amazon CloudWatch?",
        a: "A monitoring and observability service for metrics, logs, alarms, and operational visibility.",
      },
      {
        q: "What is AWS CloudTrail?",
        a: "A service that records AWS account activity and API events for auditing, governance, and security analysis.",
      },
      {
        q: "CloudWatch vs CloudTrail?",
        a: "CloudWatch focuses on operational monitoring. CloudTrail focuses on recording account activity and API events.",
      },
      {
        q: "What does AWS Config do?",
        a: "It records and evaluates AWS resource configurations to help assess changes and compliance.",
      },
      {
        q: "What is AWS Artifact?",
        a: "A service that provides access to AWS compliance reports and certain online agreements.",
      },
      {
        q: "What is a CloudWatch alarm?",
        a: "A mechanism that monitors a CloudWatch metric and performs configured actions when defined conditions are met.",
      },
    ],
  },

  {
    id: 11,
    title: "Module 11 · Pricing & Support",
    cards: [
      {
        q: "What is a core AWS pricing principle?",
        a: "Pay for the services and resources you use, with pricing varying by service and purchasing option.",
      },
      {
        q: "What is AWS Cost Explorer?",
        a: "A tool for visualizing, understanding, and analyzing AWS cost and usage data.",
      },
      {
        q: "What is AWS Budgets?",
        a: "A service for creating cost and usage budgets and receiving alerts when configured thresholds are reached.",
      },
      {
        q: "What is the AWS Pricing Calculator?",
        a: "A planning tool used to estimate the cost of an AWS architecture.",
      },
      {
        q: "What are Savings Plans?",
        a: "A pricing model that can provide lower prices on eligible compute usage in exchange for a commitment to a consistent amount of usage for a specified term.",
      },
      {
        q: "Why is cloud cost optimization important?",
        a: "Cloud resources can be changed quickly, so organizations need to monitor usage, remove unnecessary resources, and select appropriate pricing and resource options.",
      },
    ],
  },

  {
    id: 12,
    title: "Module 12 · Migrating to AWS",
    cards: [
      {
        q: "What is AWS Migration Hub?",
        a: "A central service for discovering, assessing, planning, and tracking migrations to AWS.",
      },
      {
        q: "What is AWS Application Migration Service?",
        a: "A service for migrating supported physical, virtual, and cloud-based servers to AWS.",
      },
      {
        q: "What are the 7 Rs of migration?",
        a: "Retire, Retain, Rehost, Relocate, Repurchase, Replatform, and Refactor or Re-architect.",
      },
      {
        q: "What does rehost mean?",
        a: "Move an application to the cloud largely as-is. This is commonly called lift and shift.",
      },
      {
        q: "What does replatform mean?",
        a: "Move an application while making some cloud optimizations without completely redesigning the application's core architecture.",
      },
      {
        q: "What does repurchase mean?",
        a: "Replace an existing application with a different product, often a cloud-based or SaaS solution.",
      },
      {
        q: "What does refactor or re-architect mean?",
        a: "Redesign an application to take greater advantage of cloud-native capabilities.",
      },
    ],
  },

  {
    id: 13,
    title: "Module 13 · Well-Architected Solutions",
    cards: [
      {
        q: "What is the AWS Well-Architected Framework?",
        a: "A framework of design principles and best practices for evaluating and improving cloud architectures.",
      },
      {
        q: "What are the six Well-Architected pillars?",
        a: "Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability.",
      },
      {
        q: "What does the Reliability pillar focus on?",
        a: "Ensuring workloads perform their intended functions correctly and consistently, recover from failures, and adapt to changes in demand.",
      },
      {
        q: "What does the Security pillar focus on?",
        a: "Protecting information, systems, and assets while delivering business value through risk assessments and mitigation strategies.",
      },
      {
        q: "What does Cost Optimization focus on?",
        a: "Delivering business value while avoiding unnecessary costs and understanding where money is being spent.",
      },
      {
        q: "What does Performance Efficiency focus on?",
        a: "Using computing resources efficiently and choosing appropriate resource types as requirements and technologies change.",
      },
      {
        q: "What does Sustainability focus on?",
        a: "Minimizing environmental impact through efficient resource use and responsible workload architecture.",
      },
    ],
  },
];

export default function App() {
  const [moduleId, setModuleId] = useState(1);
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [query, setQuery] = useState("");

  const module =
    modules.find((module) => module.id === moduleId) || modules[0];

  const cards = useMemo(() => {
    return module.cards.filter((card) =>
      `${card.q} ${card.a}`.toLowerCase().includes(query.toLowerCase())
    );
  }, [module, query]);

  const safeIndex =
    cards.length === 0 ? 0 : Math.min(cardIndex, cards.length - 1);

  const card = cards[safeIndex];

  function chooseModule(id) {
    setModuleId(id);
    setCardIndex(0);
    setFlipped(false);
    setQuery("");
  }

  function nextCard() {
    if (!cards.length) return;

    setCardIndex((safeIndex + 1) % cards.length);
    setFlipped(false);
  }

  function previousCard() {
    if (!cards.length) return;

    setCardIndex((safeIndex - 1 + cards.length) % cards.length);
    setFlipped(false);
  }

  function shuffleCard() {
    if (!cards.length) return;

    setCardIndex(Math.floor(Math.random() * cards.length));
    setFlipped(false);
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-3 md:p-8">
      <div className="max-w-6xl mx-auto">

        <header className="mb-6">
          <div className="text-amber-400 font-semibold tracking-wide text-sm">
            AWS CLOUD PRACTITIONER
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mt-2">
            Modules 1–13 Flashcards
          </h1>

          <p className="text-slate-400 mt-3">
            Tap a flashcard to reveal the answer.
          </p>
        </header>

        <div className="grid lg:grid-cols-[290px_1fr] gap-5">

          <aside className="bg-slate-900 rounded-2xl p-3 shadow-xl">
            <div className="font-semibold mb-3">
              Choose a module
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
              {modules.map((item) => (
                <button
                  key={item.id}
                  onClick={() => chooseModule(item.id)}
                  className={`text-left px-3 py-2 rounded-xl text-sm transition ${
                    moduleId === item.id
                      ? "bg-amber-400 text-slate-950 font-bold"
                      : "bg-slate-800 hover:bg-slate-700"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </aside>

          <main>

            <div className="flex gap-2 mb-4">

              <div className="relative flex-1">
                <Search
                  className="absolute left-3 top-3 text-slate-500"
                  size={19}
                />

                <input
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setCardIndex(0);
                    setFlipped(false);
                  }}
                  placeholder="Search this module..."
                  className="w-full bg-slate-900 rounded-xl pl-10 pr-4 py-3 outline-none ring-1 ring-slate-800 focus:ring-amber-400"
                />
              </div>

              <button
                onClick={shuffleCard}
                className="bg-slate-800 rounded-xl px-4"
                aria-label="Shuffle flashcards"
              >
                <Shuffle size={19} />
              </button>

            </div>

            <div className="text-sm text-slate-400 mb-3">
              {module.title}

              {cards.length > 0 &&
                ` · Card ${safeIndex + 1} of ${cards.length}`}
            </div>

            {card ? (
              <button
                onClick={() => setFlipped(!flipped)}
                className="w-full min-h-[330px] rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-7 md:p-12 text-left shadow-2xl ring-1 ring-slate-700 hover:ring-amber-400 transition"
              >

                <div className="text-amber-400 text-xs font-bold tracking-widest mb-6">
                  {flipped ? "ANSWER" : "QUESTION"}
                </div>

                <div className="text-2xl md:text-4xl font-semibold leading-tight">
                  {flipped ? card.a : card.q}
                </div>

                <div className="mt-10 text-slate-500 text-sm flex items-center gap-2">
                  <RotateCcw size={16} />

                  Tap card to {flipped ? "see question" : "reveal answer"}
                </div>

              </button>
            ) : (
              <div className="min-h-[330px] rounded-3xl bg-slate-900 grid place-items-center text-slate-500">
                No flashcards match your search.
              </div>
            )}

            <div className="flex justify-between mt-5">

              <button
                onClick={previousCard}
                className="flex items-center gap-1 bg-slate-800 px-4 py-3 rounded-xl"
              >
                <ChevronLeft size={19} />
                Previous
              </button>

              <button
                onClick={nextCard}
                className="flex items-center gap-1 bg-amber-400 text-slate-950 font-bold px-5 py-3 rounded-xl"
              >
                Next
                <ChevronRight size={19} />
              </button>

            </div>

          </main>
        </div>
      </div>
    </div>
  );
}
