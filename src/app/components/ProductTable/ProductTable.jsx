export default function ProductTable({ products }) {
	return (
		<div className="overflow-x-auto">
			<table className="min-w-full border-collapse border border-gray-200 shadow-lg">
				<thead>
					<tr className="bg-gray-100 text-gray-700 uppercase text-sm">
						<th className="px-6 py-3 border">Ürün Adı</th>
						<th className="px-6 py-3 border">Fiyat</th>
						<th className="px-6 py-3 border">Stok Durumu</th>
						<th className="px-6 py-3 border">İşlemler</th>
					</tr>
				</thead>
				<tbody>
					{products.map((product) => (
						<tr key={product.id} className="text-center bg-white hover:bg-gray-50">
							<td className="px-6 py-3 border">{product.name}</td>
							<td className="px-6 py-3 border text-green-600 font-semibold">{product.price}₺</td>
							<td className="px-6 py-3 border">
								{product.inStock ? (
									<span className="text-green-500 font-semibold">Stokta Var</span>
								) : (
									<span className="text-red-500 font-semibold">Tükendi</span>
								)}
							</td>
							<td className="px-6 py-3 border">
								<button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Düzenle</button>
								<button className="bg-red-500 text-white px-4 py-2 rounded ml-2 hover:bg-red-600">Sil</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
