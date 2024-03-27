'use server'

import { Column } from "@/app/types";

// バックエンドのAPIエンドポイント
const GENERATE_DUMMY_DATA_API = "/api/generate-dummy-data";

// ダミーデータ生成APIのリクエストボディの型
export interface GenerateDummyDataRequest {
  rowCount: number;
  columns: Column[];
}

// ダミーデータ生成APIのレスポンスの型
export interface GenerateDummyDataResponse {
  downloadUrl: string;
}

export const generateDummyData = async (
  request: GenerateDummyDataRequest
): Promise<GenerateDummyDataResponse | undefined> => {
  const response = await fetch(GENERATE_DUMMY_DATA_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    return;
  }

  return response.json();
};
