const { NodeTracerProvider } = require('@opentelemetry/node')
const { SimpleSpanProcessor } = require('@opentelemetry/tracing')
const { JaegerExporter } = require('@opentelemetry/exporter-jaeger')

const tracer = new NodeTracerProvider({
  plugins: {
      http: {
        enabled: true,
        path: '@opentelemetry/plugin-https'
      }
  },
})

const exporter = new JaegerExporter({
  serviceName: 'beta-service', // Nome do serviço que vai aparecer no log mais tarde
  host: 'localhost' // Endereço da API do Jaeger
})

tracer.addSpanProcessor(new SimpleSpanProcessor(exporter))

module.exports = tracer