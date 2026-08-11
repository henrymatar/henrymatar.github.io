/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Lockheed Martin',
    position: 'Systems Engineering Intern',
    url: 'https://www.lockheedmartin.com',
    startDate: '2026-06-01',
    endDate: '2026-08-31',
    summary:
      "Systems engineering internship at Lockheed Martin's Mount Laurel, NJ facility.",
    highlights: [
      'Automated end-to-end messaging validation by scripting REST API-driven tests against message topics, enabling repeatable integration and L2 testing across team products.',
      'Developed and integrated a Java/Spring Boot aggregator service with ActiveMQ and Hermes (Node/Angular) over AMQP 1.0, supporting reliable end-to-end message flows.',
      'Engineered a comprehensive JUnit 5/Mockito test suite for a Spring Boot-based tactical track manager, validating partial state merges and Protobuf-to-POJO translations across Kafka and ActiveMQ transport layers.',
      "Designed deep-nesting test cases for ECEF coordinates and covariance matrices to prevent null-overwriting of mission-critical track data, using Mockito static mocking and Spring's ReflectionTestUtils to isolate external dependencies.",
      'Refactored a Spring translation service into a modular architecture (Air, Land, Surface) and replaced an unordered HashMap with a TreeMap for relay tracking, guaranteeing deterministic ordering for IBCS aggregation and Protobuf-based health reports.',
    ],
  },
  {
    name: 'Lower Colorado River Authority (LCRA)',
    position: 'Corporate Strategy Intern',
    url: 'https://www.lcra.org',
    startDate: '2025-06-01',
    endDate: '2025-08-31',
    summary:
      'Strategy internship at LCRA in Austin, TX, supporting long-term planning around emerging energy technologies.',
    highlights: [
      'Built an interactive Power BI dashboard tracking 4 emerging technologies (SMRs, hydrogen blending, geothermal, and carbon capture), used by a 10+ person strategy team to inform long-term planning by identifying key market opportunities.',
      'Analyzed global IEA and EIA datasets covering 1,000+ power plants to evaluate adoption trends, costs, and capacity factors of next-generation energy sources.',
    ],
  },
  {
    name: 'Camp Kingswood',
    position: 'Counselor',
    url: 'https://campkingswood.org',
    startDate: '2023-06-01',
    endDate: '2024-08-31',
    summary:
      'Summer counselor at Camp Kingswood in Bridgton, ME (summers of 2023 and 2024).',
    highlights: [
      'Individually designed, executed, and led recreational programs for 58 campers and 14 staff members.',
    ],
  },
  {
    name: 'Westport Tennis Club',
    position: 'Coach',
    url: 'http://www.westporttennisclub.com',
    startDate: '2020-06-01',
    endDate: '2023-05-31',
    summary: 'Tennis coach in Westport, CT.',
    highlights: [
      'Taught engaging tennis lessons to kids and adults, fostering a love for the game while ensuring a fun and supportive environment.',
    ],
  },
];

export default work;
