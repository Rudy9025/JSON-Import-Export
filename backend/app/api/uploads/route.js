import { NextResponse } from "next/server";
import Entry from "@/app/DB/Entry";
 
export async function POST(request) {
  try {
      console.log('Starting POST request');
      const data = await request.json();
      console.log('Data received:', data);
      //  const existingEntries = await Entry.findAll();
      // if (existingEntries.length > 0) {
      //     console.log('Deleting existing rows in Entry table');
      //      await Entry.destroy({ where: {} });
      // }
       await Entry.bulkCreate(data);

       return NextResponse.json({data});
  } catch (error) {
      console.error('Error during POST request:', error);
      return NextResponse.json({ success: false, error: error.message });
  }
}
