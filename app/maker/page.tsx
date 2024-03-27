"use client";
import { useState } from "react";

type ColumnType = "string" | "number" | "date";

interface Column {
  name: string;
  type: ColumnType;
  stringType?: string;
  numberMin?: number;
  numberMax?: number;
  dateFrom?: string;
  dateTo?: string;
}

export default function DummyDataCreate() {
  const [rowCount, setRowCount] = useState(1);
  const [columns, setColumns] = useState<Column[]>([
    { name: "", type: "string" },
  ]);

  const handleRowCountChange = (e: { target: { value: string } }) => {
    setRowCount(parseInt(e.target.value));
  };

  const handleColumnNameChange = (index: number, value: string) => {
    const newColumns = [...columns];
    newColumns[index].name = value.slice(0, 32);
    setColumns(newColumns);
  };

  const handleColumnTypeChange = (index: number, value: ColumnType) => {
    const newColumns = [...columns];
    newColumns[index].type = value;
    setColumns(newColumns);
  };

  const handleStringTypeChange = (index: number, value: string) => {
    const newColumns = [...columns];
    newColumns[index].stringType = value;
    setColumns(newColumns);
  };

  const handleNumberMinChange = (index: number, value: number) => {
    const newColumns = [...columns];
    newColumns[index].numberMin = value;
    setColumns(newColumns);
  };

  const handleNumberMaxChange = (index: number, value: number) => {
    const newColumns = [...columns];
    newColumns[index].numberMax = value;
    setColumns(newColumns);
  };

  const handleDateFromChange = (index: number, value: string) => {
    const newColumns = [...columns];
    newColumns[index].dateFrom = value;
    setColumns(newColumns);
  };

  const handleDateToChange = (index: number, value: string) => {
    const newColumns = [...columns];
    newColumns[index].dateTo = value;
    setColumns(newColumns);
  };

  const addColumn = () => {
    if (columns.length < 10) {
      setColumns([...columns, { name: "", type: "string" }]);
    }
  };

  const removeColumn = (index: number) => {
    const newColumns = [...columns];
    newColumns.splice(index, 1);
    setColumns(newColumns);
  };

  const downloadCSV = () => {
    // CSVファイルの生成とダウンロードの処理を実装
    // ...
  };

  return (
    <div className="flex flex-col">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            ダミーデータ作成
          </h2>
          <div className="mb-4">
            <label
              htmlFor="rowCount"
              className="block text-sm font-medium text-gray-700"
            >
              行数
            </label>
            <input
              type="number"
              id="rowCount"
              min="1"
              max="1000"
              value={rowCount}
              onChange={handleRowCountChange}
              className="mt-1 block w-24 text-black border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2 text-gray-800">カラム</h3>
            {columns.map((column, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  placeholder="カラム名"
                  value={column.name}
                  onChange={(e) =>
                    handleColumnNameChange(index, e.target.value)
                  }
                  className="mr-2 block w-64 text-black border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <select
                  value={column.type}
                  onChange={(e) =>
                    handleColumnTypeChange(index, e.target.value as ColumnType)
                  }
                  className="mr-2 block w-32 text-black border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">-- 型を選択 --</option>
                  <option value="string">文字列</option>
                  <option value="number">数値</option>
                  <option value="date">日付</option>
                </select>
                {column.type === "string" && (
                  <input
                    type="text"
                    placeholder="文字列の種類"
                    value={column.stringType}
                    onChange={(e) =>
                      handleStringTypeChange(index, e.target.value)
                    }
                    className="mr-2 block w-48 text-black border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                )}
                {column.type === "number" && (
                  <div className="flex items-center">
                    <input
                      type="number"
                      placeholder="最小値"
                      value={column.numberMin}
                      onChange={(e) =>
                        handleNumberMinChange(index, parseInt(e.target.value))
                      }
                      className="mr-2 block w-32 text-black border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <div className="mr-2 text-black">~</div>
                    <input
                      type="number"
                      placeholder="最大値"
                      value={column.numberMax}
                      onChange={(e) =>
                        handleNumberMaxChange(index, parseInt(e.target.value))
                      }
                      className="mr-2 block w-32 text-black border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                )}
                {column.type === "date" && (
                  <div className="flex items-center">
                    <input
                      type="date"
                      placeholder="開始日"
                      value={column.dateFrom}
                      onChange={(e) =>
                        handleDateFromChange(index, e.target.value)
                      }
                      className="mr-2 block w-40 text-black border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <div className="mr-2 text-black">~</div>
                    <input
                      type="date"
                      placeholder="終了日"
                      value={column.dateTo}
                      onChange={(e) =>
                        handleDateToChange(index, e.target.value)
                      }
                      className="mr-2 block w-40 text-black border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                )}
                {columns.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeColumn(index)}
                    className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    削除
                  </button>
                )}
              </div>
            ))}
            {columns.length < 10 && (
              <button
                type="button"
                onClick={addColumn}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                カラムを追加
              </button>
            )}
          </div>
          <div>
            <button
              type="button"
              onClick={downloadCSV}
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              CSVファイルをダウンロード
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
