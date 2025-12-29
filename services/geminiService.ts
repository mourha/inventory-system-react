import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function askInventoryCopilot(query: string, context: any) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `
        You are Sustain Stack's AI Inventory Assistant, an expert in supply chain optimization.
        Your goal is to provide deep, actionable insights based on the provided business data.

        Current Business Data:
        - Inventory: ${JSON.stringify(context.products)}
        - Recent Sales: ${JSON.stringify(context.salesOrders)}
        - Purchase Orders (POs): ${JSON.stringify(context.purchaseOrders)}
        - Suppliers List: ${JSON.stringify(context.suppliers)}

        Analytical Guidelines:
        1. REORDERING: When recommending a reorder, check if there is ALREADY a 'PENDING' PO for that product to avoid double-ordering.
        2. LOW STOCK: If a product is below reorderLevel but has a PENDING PO, mention that stock is on the way.
        3. SUPPLIERS: Link reorder suggestions to the most frequent or relevant supplier from the PO history.
        4. SALES TRENDS: Briefly mention if a low-stock item is a "fast mover" based on recent sales orders.
        5. TONE: Professional, concise, and data-driven. Use bullet points for lists.

        User Query: ${query}
      `,
    });
    return response.text;
  } catch (error) {
    console.error("Copilot Error:", error);
    return "I'm having trouble analyzing your inventory data right now. Please check your connection and try again.";
  }
}
