export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (error) {
    // since error object is enumerable we have to serialize them
    // first
    const errorData = {
      name: error.name,
      message: error.message,
      stack: error.stack,
    };
    queue.push(`${JSON.parse(JSON.stringify(errorData)).name}: ${JSON.parse(JSON.stringify(errorData)).message}`);
    // or we can just use error.toString()
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
