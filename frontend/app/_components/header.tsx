export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">
          ダミーデータ作成ツール
        </h1>
        <nav className="mt-4">
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-gray-600 hover:text-gray-800">
                ホーム
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-600 hover:text-gray-800">
                このサイトについて
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-600 hover:text-gray-800">
                お問い合わせ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
