import React, { useState } from "react";
import legalAID from "./LawAPI.json";
import Header from "./components/Header";
import Part1_Imp from "./Part1_Imp";
import Part2_imp from "./Part2_imp";
import Part3_imp from "./part3_imp";

function LegalAID() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedLaw, setExpandedLaw] = useState(null); // Tracks the expanded law

  // Filter laws based on search term
  const filteredLaws = legalAID.filter(
    (law) => searchTerm && law.law.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  // Toggle the selected law
  const toggleLaw = (law) => {
    setExpandedLaw((prev) => (prev === law ? null : law));
  };

  return (

    <div>

      <Header/>
    
    <div className="max-w-4xl mx-auto p-4">
      
      <h1 className="text-2xl font-bold mb-4">Search for Laws</h1>

      <input
        type="text"
        placeholder="Search for a law..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      {/* Search Results */}
      <div id="search-results">
        {filteredLaws.length > 0 ? (
          filteredLaws.map((law) => (
            <div key={law.law} className="mb-2">
              <div
                className="p-3 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded"
                onClick={() => toggleLaw(law)}
              >
                {law.law}
              </div>
              {expandedLaw === law && (
                <div className="mt-2 p-3 bg-gray-200 rounded">
                  <h2 className="font-semibold">Description:</h2>
                  <p>{law.description}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No matching laws found.</p>
        )}
      </div>
    </div>


    <div className="">
    <div className="flex justify-center items-center gap-6">

      <div className="flex flex-col h-[500px] w-[300px] overflow-auto no-cursor-scrollbar" style={{
        scrollbarWidth: 'none', /* For Firefox */
        msOverflowStyle: 'none', /* For IE and Edge */
      }}>
        <Part1_Imp />
      </div>

      <div className=" h-[500px] w-[300px] overflow-auto scroll-m-0 scroll-smooth no-cursor-scrollbar" style={{
        scrollbarWidth: 'none', /* For Firefox */
        msOverflowStyle: 'none', /* For IE and Edge */
      }}>
        <Part2_imp />
      </div>

      <div className="h-[500px] w-[300px] overflow-auto no-cursor-scrollbar" style={{
        scrollbarWidth: 'none', /* For Firefox */
        msOverflowStyle: 'none', /* For IE and Edge */
      }}>
        <Part3_imp />
      </div>
</div>
</div>


</div>

    
  );
}

export default LegalAID;
