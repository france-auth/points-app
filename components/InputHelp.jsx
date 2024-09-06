import React from 'react'

const InputHelp = () => {
  const handleSubmit = () => {
    
  }
  const handleChange = () => {

  }
  return (
    <div>
      <div className='max-h-[80vh] overflow-y-auto p-4'>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-[#2a2e35] rounded-lg shadow-md space-y-4">
        <h1 className="text-2xl font-bold mb-4 text-white">Add a New Drop</h1>
        
        <div className="relative m-4">
            <label htmlFor='name' className=" text-sm font-medium text-white mb-4 inline-block">Drop Name:</label>
            <input type="text"
                id='name'
                value={name}
                name='name'
                onChange={handleChange("name")}
                placeholder='e.g, Eclipse Testnet'
                className="w-full px-3 py-2 border border-gray-300 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
        </div>
        
        <div className="relative m-4">
            <label htmlFor='description' className=" text-sm font-medium text-white mb-4 inline-block">Drop Description:</label>
            <textarea
                id='description'
                name='description'
                rows={4}
                onChange={handleChange("description")}
                placeholder='e.g, first eth l2 on SVM'
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 text-white focus:ring-green-500 focus:border-green-500 sm:text-sm"
            ></textarea>
        </div>
        
        <div className="relative m-4">
            <label htmlFor='chain' className=" text-sm font-medium text-white mb-4 inline-block">Drop Chain:</label>
            <input type="text"
                id='chain'
                name='chain'
                onChange={handleChange("chain")}
                placeholder='e.g, Ethereum and Solana'
                className="w-full px-3 py-2 border border-gray-300 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
        </div>
        
        <div className="relative m-4">
            <label htmlFor='date' className=" text-sm font-medium text-white mb-4 inline-block">Date:</label>
            <input type="date"
                id='date'
                name='date'
                onChange={handleChange("date")}
                className="w-full px-3 py-2 border  border-gray-900 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
        </div>
        
      
        <div className="relative m-4">
            <label htmlFor='url' className="text-sm font-medium text-white mb-4 inline-block">Drop URL:</label>
            <input type="url"
                id='url'
                name='url'
                onChange={handleChange("url")}
                placeholder='e.g, https://example.com'
                className="w-full px-3 py-2 border border-gray-300 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
        </div>
        
    
        <div className="relative m-4">
            <label htmlFor='cost' className="text-sm font-medium text-white mb-4 inline-block">Cost:</label>
            <select
                id='cost'
                name='cost'
                onChange={handleChange("cost")}
                className="w-full px-3 py-2 border border-gray-300 text-white bg-[#2a2e35]  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
            >
                <option value="Free">Free</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  )
}
export default InputHelp