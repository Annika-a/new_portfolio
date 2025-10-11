// Portfolio Data - Projects and Artwork
const portfolioData = {
    projects: {
        'data-lake': {
            icon: 'fas fa-cloud',
            title: 'Data Lake Architecture',
            subtitle: 'Scalable cloud-based data storage and processing',
            date: '2024-03-15',
            overview: 'Architected a comprehensive data lake solution for a leading Finnish fintech company, consolidating data from various Nordic banking sources into a unified, queryable repository. The system includes automated ETL processes, data governance, and security controls compliant with EU regulations.',
            technologies: ['AWS S3', 'AWS Glue', 'Amazon Athena', 'Lambda', 'CloudFormation', 'IAM'],
            features: [
                'Automated data ingestion and ETL processes',
                'Data partitioning and optimization strategies',
                'Role-based access control and encryption',
                'Data cataloging and metadata management',
                'Cost optimization through intelligent storage tiers',
                'Integration with business intelligence tools'
            ],
            results: 'Reduced data storage costs by 40% while improving query performance by 50%. Enabled self-service analytics for Finnish business users and reduced data preparation time by 80%. The solution now serves over 2 million Nordic customers.'
        },
        'ml-store': {
            icon: 'fas fa-chart-line',
            title: 'ML Feature Store',
            subtitle: 'Centralized feature management for machine learning',
            date: '2024-01-22',
            overview: 'Built a comprehensive feature store for a Helsinki-based gaming company that serves as the single source of truth for ML features across multiple teams. The system provides real-time feature computation, versioning, and monitoring capabilities for player behavior analytics.',
            technologies: ['Python', 'Redis', 'Docker', 'FastAPI', 'PostgreSQL', 'Apache Airflow'],
            features: [
                'Real-time feature computation and serving',
                'Feature versioning and lineage tracking',
                'Automated feature validation and monitoring',
                'RESTful API for feature access',
                'Integration with ML training pipelines',
                'Feature discovery and documentation'
            ],
            results: 'Improved ML model performance by 20% through consistent feature engineering. Reduced feature development time by 60% and enabled faster model deployment cycles. The system now processes data for over 5 million active players across Nordic markets.'
        },
        'ml project': {
            icon: 'fas fa-chart-line',
            title: 'ML for job searc',
            subtitle: 'Centralized feature management for machine learning',
            date: '2024-01-22',
            overview: 'Built a comprehensive feature store for a Helsinki-based gaming company that serves as the single source of truth for ML features across multiple teams. The system provides real-time feature computation, versioning, and monitoring capabilities for player behavior analytics.',
            technologies: ['Python', 'Redis', 'Docker', 'FastAPI', 'PostgreSQL', 'Apache Airflow'],
            features: [
                'Real-time feature computation and serving',
                'Feature versioning and lineage tracking' 
            ],
            results: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        pipeline: {
            icon: 'fas fa-database',
            title: 'Real-time Analytics Pipeline',
            subtitle: 'High-performance streaming data processing',
            date: '2023-11-08',
            overview: 'Designed and implemented a robust real-time analytics pipeline for a Finnish e-commerce platform, capable of processing over 1 million events daily. The system handles data ingestion, transformation, and analysis with sub-second latency requirements for Nordic market operations.',
            technologies: ['Apache Kafka', 'Spark Streaming', 'AWS Kinesis', 'Docker', 'Kubernetes', 'Prometheus'],
            features: [
                'Real-time data ingestion from multiple sources',
                'Automatic scaling based on load',
                'Data quality monitoring and alerting',
                'Fault-tolerant architecture with 99.9% uptime',
                'Integration with existing data warehouse',
                'Custom dashboard for monitoring pipeline health'
            ],
            results: 'Reduced data processing time by 75% and enabled real-time decision making for Finnish business stakeholders. The pipeline now handles 3x more data volume with improved reliability, supporting peak shopping seasons across Nordic countries.'
        }
    },
    artwork: {
        'abstract-geometry': {
            icon: 'fas fa-cube',
            imageSrc: 'img/satelliitti.gif',
            title: 'Abstract Geometry',
            subtitle: '3D rendered mathematical art',
            date: '2024-02-28',
            overview: 'An exploration of mathematical beauty through 3D rendering and abstract composition, inspired by Finnish design principles and Nordic minimalism. This piece uses geometric forms and mathematical principles to create visually striking compositions that blend art and science.',
            techniques: ['3D Modeling', 'Blender', 'Rendering', 'Mathematical Art', 'Geometry', 'Lighting'],
            features: [
                'Procedural 3D modeling using mathematical algorithms',
                'Advanced lighting and material techniques',
                'Multiple camera angles and compositions',
                'Post-processing effects for enhanced visual impact',
                'Scalable design for various output formats',
                'Integration of mathematical concepts with artistic expression'
            ],
            results: 'Selected for Helsinki Design Week and used in Finnish educational materials. Demonstrates the intersection of technology, mathematics, and artistic vision with Nordic design aesthetics.'
        },
        'neon-dreams': {
            icon: 'fas fa-palette',
            imageSrc: 'img/run_frontf1335-300x225.jpg',
            title: 'Neon Dreams',
            subtitle: 'Cyberpunk digital painting exploration',
            date: '2023-12-14',
            overview: 'A vibrant exploration of cyberpunk aesthetics through digital painting techniques, reimagined with Finnish urban landscapes and Nordic lighting. This piece combines traditional painting methods with modern digital tools to create an immersive Helsinki-inspired urban landscape filled with neon lights and futuristic elements.',
            techniques: ['Digital Painting', 'Photoshop', 'Procreate', 'Color Theory', 'Lighting Design', 'Composition'],
            features: [
                'Hand-painted digital artwork using custom brushes',
                'Complex lighting effects with neon glow',
                'Detailed urban architecture and atmosphere',
                'Color palette inspired by cyberpunk aesthetics',
                'High-resolution output for print and digital display',
                'Multiple iterations exploring different moods'
            ],
            results: 'Featured in Finnish digital art showcase and used as inspiration for Nordic game concept art. The piece demonstrates mastery of digital painting techniques and atmospheric storytelling through visual design, capturing the essence of Finnish urban landscapes.'
        },
        'natures-code': {
            icon: 'fas fa-tree',
            title: 'Nature\'s Code',
            subtitle: 'Generative art inspired by algorithms',
            overview: 'A generative art project that explores the patterns found in Finnish nature through algorithmic creation. Using custom code and mathematical functions inspired by Nordic landscapes, this piece generates organic forms that mimic natural growth patterns found in Finnish forests and lakes.',
            techniques: ['Generative Art', 'Processing', 'JavaScript', 'Algorithms', 'Nature Patterns', 'Fractals'],
            features: [
                'Custom algorithms simulating natural growth patterns',
                'Interactive elements responding to user input',
                'Multiple variations generated from base algorithms',
                'Integration of mathematical concepts with organic forms',
                'Real-time generation capabilities',
                'Export options for various digital formats'
            ],
            results: 'Exhibited at Finnish digital art festival and featured in Nordic generative art publication. Showcases the creative potential of algorithmic art and computational creativity inspired by Finnish natural landscapes.'
        },
        'space-odyssey': {
            icon: 'fas fa-rocket',
            title: 'Space Odyssey',
            subtitle: 'Sci-fi concept art and world building',
            overview: 'A comprehensive sci-fi concept art project featuring space exploration themes and futuristic technology, inspired by Finnish space research and Nordic innovation. This piece combines detailed character design, environmental art, and world-building elements to create an immersive sci-fi universe with Finnish technological aesthetics.',
            techniques: ['Concept Art', 'Character Design', 'Environment Art', 'Photoshop', 'World Building', 'Sci-fi Design'],
            features: [
                'Detailed character and creature designs',
                'Environmental concept art for space settings',
                'Technology and vehicle design concepts',
                'Color studies and mood exploration',
                'Multiple iterations and design variations',
                'Integration with narrative storytelling elements'
            ],
            results: 'Used as concept art for Finnish indie game development and featured in Nordic sci-fi art collection. Demonstrates strong world-building and conceptual design skills with Finnish technological innovation themes.'
        },
        'emotional-landscapes': {
            icon: 'fas fa-heart',
            title: 'Emotional Landscapes',
            subtitle: 'Expressive digital landscapes',
            overview: 'A series of digital landscapes that explore emotional themes through color, composition, and atmospheric effects inspired by Finnish seasons and Nordic light conditions. Each piece represents different emotional states translated into visual form using Finnish natural color palettes.',
            techniques: ['Digital Painting', 'Landscape Art', 'Color Psychology', 'Atmospheric Effects', 'Emotional Design', 'Digital Brushes'],
            features: [
                'Emotion-driven color palettes and compositions',
                'Atmospheric effects enhancing mood and feeling',
                'Custom brush work for organic textures',
                'Multiple pieces exploring different emotions',
                'High-resolution output for gallery display',
                'Integration of personal experiences with artistic expression'
            ],
            results: 'Personal art series exploring emotional expression through digital media, inspired by Finnish landscapes and Nordic seasons. Represents a deep dive into the connection between emotion and visual art with Finnish cultural influences.'
        },
        'infinite-loop': {
            icon: 'fas fa-infinity',
            title: 'Infinite Loop',
            subtitle: 'Interactive installation concept',
            overview: 'A conceptual interactive art installation that explores themes of infinity, recursion, and user interaction, inspired by Finnish design philosophy and Nordic minimalism. This piece combines digital art with interactive elements to create an immersive experience reflecting Finnish technological innovation.',
            techniques: ['Interactive Art', 'Unity', 'C# Programming', 'User Experience', 'Installation Art', 'Real-time Graphics'],
            features: [
                'Interactive elements responding to user movement',
                'Real-time graphics and particle effects',
                'Sound integration and audio-visual synchronization',
                'Multiple interaction modes and user paths',
                'Scalable design for various installation sizes',
                'Integration of technology with artistic concept'
            ],
            results: 'Conceptual design for interactive art installation featured at Finnish tech conferences. Demonstrates the fusion of technology, user experience, and artistic vision in contemporary digital art with Nordic design principles.'
        }
    }
};
