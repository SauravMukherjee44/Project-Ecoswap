import React from 'react';
import { User, Package, Leaf, Award, Settings, LogOut } from 'lucide-react';

export default function Profile() {
  const impactStats = {
    plasticSaved: 127,
    co2Reduced: 456,
    treesPlanted: 12,
    totalOrders: 24,
  };

  const recentOrders = [
    {
      id: 1,
      product: 'Bamboo Water Bottle',
      date: '2024-03-15',
      status: 'Delivered',
      price: 24.99,
    },
    {
      id: 2,
      product: 'Reusable Produce Bags',
      date: '2024-03-10',
      status: 'In Transit',
      price: 15.99,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-purple-600 px-6 py-8">
            <div className="flex items-center">
              <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center">
                <User className="h-12 w-12 text-emerald-600" />
              </div>
              <div className="ml-6">
                <h1 className="text-2xl font-bold text-white">Anjali Tiwari</h1>
                <p className="text-emerald-100">Eco Warrior since 2024</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            <div className="bg-emerald-50 rounded-lg p-4">
              <Package className="h-8 w-8 text-emerald-600 mb-2" />
              <h3 className="text-lg font-medium text-gray-900">Total Orders</h3>
              <p className="text-2xl font-bold text-emerald-600">{impactStats.totalOrders}</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <Leaf className="h-8 w-8 text-purple-600 mb-2" />
              <h3 className="text-lg font-medium text-gray-900">Plastic Saved</h3>
              <p className="text-2xl font-bold text-purple-600">{impactStats.plasticSaved}kg</p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-4">
              <Award className="h-8 w-8 text-emerald-600 mb-2" />
              <h3 className="text-lg font-medium text-gray-900">CO2 Reduced</h3>
              <p className="text-2xl font-bold text-emerald-600">{impactStats.co2Reduced}kg</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <Leaf className="h-8 w-8 text-purple-600 mb-2" />
              <h3 className="text-lg font-medium text-gray-900">Trees Planted</h3>
              <p className="text-2xl font-bold text-purple-600">{impactStats.treesPlanted}</p>
            </div>
          </div>

          <div className="p-6 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Orders</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentOrders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {order.product}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${order.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-6 border-t border-gray-200">
            <div className="flex space-x-4">
              <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </button>
              <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700">
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}