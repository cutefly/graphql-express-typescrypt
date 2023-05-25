import { Kafka, Partitioners  } from 'kafkajs'
import envs from '../envs'

const kafka = new Kafka({
    clientId: 'node-app',
    brokers: ['localhost:9092']
})
const producer = kafka.producer({ createPartitioner: Partitioners.LegacyPartitioner })
producer.connect()

export default producer