---
title: "data-engineer-roadmap"
tags:
- all-post
enableToc: false
---


CS Fundamentals:
- Basic terminal usage
- [[data-structure-and-algorithm]]
- [[api]]
- [[rest-api]]
- linux
	- [[cli]]
	- [[vim-bindings]]
	- [[shell-scripting]]
	- [[cronjobs]]
- how does computer work?
- how does internet work?
- [[git]] version control

Programming language (learn how to write clean, extensible code):
- python
- java
- scala
- go

Testing:
- [[unit-testing]]
- [[integration-testing]]
- [[functional-testing]]

Database fundamental (understand the entity-relationship model and normalization, learn how to design databases and understand scaling patterns):
- [[code-sql]]
- [[database-normalization]]
- [[acid-transaction]]
- [[cap-theorem]]
- [[oltp-vs-olap]]
- [[horizontal-vs-vertical-scaling]]
- [[dimensional-modelling]]

Relational databases:
- MySQL
- PostgreSQL
- MariaDB
- Amazon Aurora

Non-relational databases (understand the difference of NoSQL databases, master one from each category):
- Document
	- MongoDB
	- Elasticsearch
	- Apache CouchDB
	- Azure CormosDB
- Wide column
	- Apache Cassandra
	- Apache HBase
	- Google Bigtable
- Graph
	- Neo4j
	- Amazon Neptune
- Key-value
	- Redis
	- Memcached
	- Amazon DynamoDB


Data warehouses:
- Snowflake
- Presto
- Apache Hive
- Apache Impala
- Amazon Redshift
- Google BigQuery
- Azure Synapse
- ClickHouse

Object storage:
- AWS S3
- Azure Blob Storage
- Google Cloud Storage

Cluster computing fundamentals (most modern data processing frameworks are based on apache hadoop and MapReduce):
- Apache Hadoop
- HDFS
- MapReduce
- Lambda & Kappa architectures
- Managed Hadoop
	- Amazon EMR
	- Google Dataproc
	- Azure Data Like

Data processing (often done by data warehouse application):
- Batch
	- Apache Pig
	- Apache Arrow
	- Data build tool
- Hybrid
	- Apache Spark
	- Apache Beam
	- Apache Flink
	- Apache NiFi
- Streaming
	- Apache Kafka
	- Apache Storm
	- Apache Samza
	- Amazon Kinesis

Messaging:
- RabbitMQ
- Apache ActiveMQ
- Amazon SNS & SQS
- Google PubSub
- Azure Service Bus

Workflow scheduling
- Apache airflow
- Google composer
- Apache Oozie
- Luigi

Monitoring data pipelines:
- Prometheus
- Datadog
- Sentry
- StatsD

Networking:
- Protocols
	- HTTP/HTTPS
	- TCP
	- SSH
	- IP
	- DNS
- Firewalls
- VPN
- VPC

Infrastructure as code:
- Containers
	- Docker
	- LXC
- Container orchestration
	- Kubernetes
	- Docker Swarm
	- Apache Mesos
	- GKE
- Infrastructure provisioning
	- Terraform
	- Pulumi
	- AWS CDK

CI/CD:
- Github Actions
- Jenkins

Identity and access management:
- Active Directory
- Azure Active Directory

Data security & privacy:
- Legal compliance
- Encryption
- Key management
- Data governance & integrity
