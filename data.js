// Portfolio Data - Projects and Artwork
const portfolioData = {
    projects: {
        'data-lake': {
            icon: 'fas fa-cloud',
            title: 'Data Lake Architecture',
            subtitle: 'Scalable cloud-based data storage and processing',
            date: '2024-03-15',
            overview: 'Architected a comprehensive data lake solution on AWS that consolidates data from various sources into a unified, queryable repository. The system includes automated ETL processes, data governance, and security controls.',
            technologies: ['AWS S3', 'AWS Glue', 'Amazon Athena', 'Lambda', 'CloudFormation', 'IAM'],
            features: [
                'Automated data ingestion and ETL processes',
                'Data partitioning and optimization strategies',
                'Role-based access control and encryption',
                'Data cataloging and metadata management',
                'Cost optimization through intelligent storage tiers',
                'Integration with business intelligence tools'
            ],
            results: 'Reduced data storage costs by 40% while improving query performance by 50%. Enabled self-service analytics for business users and reduced data preparation time by 80%.'
        },
        'ml-store': {
            icon: 'fas fa-chart-line',
            title: 'ML Feature Store',
            subtitle: 'Centralized feature management for machine learning',
            date: '2024-01-22',
            overview: 'Built a comprehensive feature store that serves as the single source of truth for ML features across multiple teams. The system provides real-time feature computation, versioning, and monitoring capabilities.',
            technologies: ['Python', 'Redis', 'Docker', 'FastAPI', 'PostgreSQL', 'Apache Airflow'],
            features: [
                'Real-time feature computation and serving',
                'Feature versioning and lineage tracking',
                'Automated feature validation and monitoring',
                'RESTful API for feature access',
                'Integration with ML training pipelines',
                'Feature discovery and documentation'
            ],
            results: 'Improved ML model performance by 20% through consistent feature engineering. Reduced feature development time by 60% and enabled faster model deployment cycles.'
        },
        pipeline: {
            icon: 'fas fa-database',
            title: 'Real-time Analytics Pipeline',
            subtitle: 'High-performance streaming data processing',
            date: '2023-11-08',
            overview: 'Designed and implemented a robust real-time analytics pipeline capable of processing over 1 million events daily. The system handles data ingestion, transformation, and analysis with sub-second latency requirements.',
            technologies: ['Apache Kafka', 'Spark Streaming', 'AWS Kinesis', 'Docker', 'Kubernetes', 'Prometheus'],
            features: [
                'Real-time data ingestion from multiple sources',
                'Automatic scaling based on load',
                'Data quality monitoring and alerting',
                'Fault-tolerant architecture with 99.9% uptime',
                'Integration with existing data warehouse',
                'Custom dashboard for monitoring pipeline health'
            ],
            results: 'Reduced data processing time by 75% and enabled real-time decision making for business stakeholders. The pipeline now handles 3x more data volume with improved reliability.'
        }
    },
    artwork: {
        'abstract-geometry': {
            icon: 'fas fa-cube',
            imageSrc: 'img/satelliitti.gif',
            title: 'Abstract Geometry',
            subtitle: '3D rendered mathematical art',
            date: '2024-02-28',
            overview: 'An exploration of mathematical beauty through 3D rendering and abstract composition. This piece uses geometric forms and mathematical principles to create visually striking compositions that blend art and science.',
            techniques: ['3D Modeling', 'Blender', 'Rendering', 'Mathematical Art', 'Geometry', 'Lighting'],
            features: [
                'Procedural 3D modeling using mathematical algorithms',
                'Advanced lighting and material techniques',
                'Multiple camera angles and compositions',
                'Post-processing effects for enhanced visual impact',
                'Scalable design for various output formats',
                'Integration of mathematical concepts with artistic expression'
            ],
            results: 'Selected for mathematical art exhibition and used in educational materials. Demonstrates the intersection of technology, mathematics, and artistic vision.'
        },
        'neon-dreams': {
            icon: 'fas fa-palette',
            imageSrc: 'img/run_frontf1335-300x225.jpg',
            title: 'Neon Dreams',
            subtitle: 'Cyberpunk digital painting exploration',
            date: '2023-12-14',
            overview: 'A vibrant exploration of cyberpunk aesthetics through digital painting techniques. This piece combines traditional painting methods with modern digital tools to create an immersive urban landscape filled with neon lights and futuristic elements.',
            techniques: ['Digital Painting', 'Photoshop', 'Procreate', 'Color Theory', 'Lighting Design', 'Composition'],
            features: [
                'Hand-painted digital artwork using custom brushes',
                'Complex lighting effects with neon glow',
                'Detailed urban architecture and atmosphere',
                'Color palette inspired by cyberpunk aesthetics',
                'High-resolution output for print and digital display',
                'Multiple iterations exploring different moods'
            ],
            results: 'Featured in digital art showcase and used as inspiration for game concept art. The piece demonstrates mastery of digital painting techniques and atmospheric storytelling through visual design.'
        },
        'natures-code': {
            icon: 'fas fa-tree',
            title: 'Nature\'s Code',
            subtitle: 'Generative art inspired by algorithms',
            overview: 'A generative art project that explores the patterns found in nature through algorithmic creation. Using custom code and mathematical functions, this piece generates organic forms that mimic natural growth patterns.',
            techniques: ['Generative Art', 'Processing', 'JavaScript', 'Algorithms', 'Nature Patterns', 'Fractals'],
            features: [
                'Custom algorithms simulating natural growth patterns',
                'Interactive elements responding to user input',
                'Multiple variations generated from base algorithms',
                'Integration of mathematical concepts with organic forms',
                'Real-time generation capabilities',
                'Export options for various digital formats'
            ],
            results: 'Exhibited at digital art festival and featured in generative art publication. Showcases the creative potential of algorithmic art and computational creativity.'
        },
        'space-odyssey': {
            icon: 'fas fa-rocket',
            title: 'Space Odyssey',
            subtitle: 'Sci-fi concept art and world building',
            overview: 'A comprehensive sci-fi concept art project featuring space exploration themes and futuristic technology. This piece combines detailed character design, environmental art, and world-building elements to create an immersive sci-fi universe.',
            techniques: ['Concept Art', 'Character Design', 'Environment Art', 'Photoshop', 'World Building', 'Sci-fi Design'],
            features: [
                'Detailed character and creature designs',
                'Environmental concept art for space settings',
                'Technology and vehicle design concepts',
                'Color studies and mood exploration',
                'Multiple iterations and design variations',
                'Integration with narrative storytelling elements'
            ],
            results: 'Used as concept art for indie game development and featured in sci-fi art collection. Demonstrates strong world-building and conceptual design skills.'
        },
        'emotional-landscapes': {
            icon: 'fas fa-heart',
            title: 'Emotional Landscapes',
            subtitle: 'Expressive digital landscapes',
            overview: 'A series of digital landscapes that explore emotional themes through color, composition, and atmospheric effects. Each piece represents different emotional states translated into visual form.',
            techniques: ['Digital Painting', 'Landscape Art', 'Color Psychology', 'Atmospheric Effects', 'Emotional Design', 'Digital Brushes'],
            features: [
                'Emotion-driven color palettes and compositions',
                'Atmospheric effects enhancing mood and feeling',
                'Custom brush work for organic textures',
                'Multiple pieces exploring different emotions',
                'High-resolution output for gallery display',
                'Integration of personal experiences with artistic expression'
            ],
            results: 'Personal art series exploring emotional expression through digital media. Represents a deep dive into the connection between emotion and visual art.'
        },
        'infinite-loop': {
            icon: 'fas fa-infinity',
            title: 'Infinite Loop',
            subtitle: 'Interactive installation concept',
            overview: 'A conceptual interactive art installation that explores themes of infinity, recursion, and user interaction. This piece combines digital art with interactive elements to create an immersive experience.',
            techniques: ['Interactive Art', 'Unity', 'C# Programming', 'User Experience', 'Installation Art', 'Real-time Graphics'],
            features: [
                'Interactive elements responding to user movement',
                'Real-time graphics and particle effects',
                'Sound integration and audio-visual synchronization',
                'Multiple interaction modes and user paths',
                'Scalable design for various installation sizes',
                'Integration of technology with artistic concept'
            ],
            results: 'Conceptual design for interactive art installation. Demonstrates the fusion of technology, user experience, and artistic vision in contemporary digital art.'
        }
    }
};
