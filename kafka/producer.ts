import { Kafka, Partitioners  } from 'kafkajs'
import envs from '../envs'

const kafka = new Kafka({
    clientId: envs.kafka.clientId,
    brokers: [envs.kafka.broker]
})
const producer = kafka.producer({ createPartitioner: Partitioners.LegacyPartitioner })
producer.connect()

export default producer