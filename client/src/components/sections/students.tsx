import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search, RotateCcw, Users, GraduationCap, BookOpen, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { Student, Faculty } from "@shared/schema";

export default function Students() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 10;

  const { data: students, isLoading } = useQuery<Student[]>({
    queryKey: ["/api/students", searchQuery ? { search: searchQuery } : undefined],
  });

  const { data: faculty } = useQuery<Faculty[]>({
    queryKey: ["/api/faculty"],
  });

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setSearchQuery("");
    setCurrentPage(1);
  };

  // Pagination logic
  const totalPages = Math.ceil((students?.length || 0) / studentsPerPage);
  const startIndex = (currentPage - 1) * studentsPerPage;
  const paginatedStudents = students?.slice(startIndex, startIndex + studentsPerPage);

  const getMentorName = (mentorId: string) => {
    return faculty?.find(f => f.id === mentorId)?.name || "Unknown Mentor";
  };

  if (isLoading) {
    return (
      <section id="students" className="py-20" data-testid="students-section">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-center mb-16 gradient-text">
            STUDENT_DATABASE
          </h2>
          <div className="cyber-card animate-pulse">
            <div className="h-96 bg-cyber-gray rounded"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="students" className="py-20" data-testid="students-section">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-center mb-16 gradient-text" data-testid="students-title">
          STUDENT_DATABASE
        </h2>
        
        {/* Search and Filter */}
        <div className="cyber-card mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-cyber-purple" />
              <Input
                type="text"
                placeholder="Search by name, registration number, or research interest..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 bg-cyber-gray/50 border-cyber-purple/30 text-white font-mono focus:border-cyber-purple"
                data-testid="input-student-search"
              />
            </div>
            <Button
              onClick={resetFilters}
              variant="outline"
              className="cyber-btn-outline"
              data-testid="button-reset-filters"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
          </div>
        </div>

        {/* Students Table */}
        <div className="cyber-card overflow-x-auto">
          <table className="w-full text-left" data-testid="students-table">
            <thead>
              <tr className="border-b border-cyber-purple">
                <th className="px-6 py-4 text-left font-mono text-cyber-purple">NAME</th>
                <th className="px-6 py-4 text-left font-mono text-cyber-purple">REG_NO</th>
                <th className="px-6 py-4 text-left font-mono text-cyber-purple">MENTOR</th>
                <th className="px-6 py-4 text-left font-mono text-cyber-purple">RESEARCH_INTEREST</th>
                <th className="px-6 py-4 text-left font-mono text-cyber-purple">YEAR</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cyber-gray">
              {paginatedStudents?.map((student, index) => (
                <tr 
                  key={student.id} 
                  className="hover:bg-cyber-purple/10 transition-colors"
                  data-testid={`student-row-${index}`}
                >
                  <td className="px-6 py-4 font-mono" data-testid={`student-name-${index}`}>{student.name}</td>
                  <td className="px-6 py-4 font-mono" data-testid={`student-regno-${index}`}>{student.registrationNumber}</td>
                  <td className="px-6 py-4 font-mono" data-testid={`student-mentor-${index}`}>
                    {student.mentorId ? getMentorName(student.mentorId) : "No Mentor"}
                  </td>
                  <td className="px-6 py-4 font-mono text-cyber-cyan" data-testid={`student-research-${index}`}>
                    {student.researchInterest}
                  </td>
                  <td className="px-6 py-4 font-mono" data-testid={`student-year-${index}`}>Year {student.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8" data-testid="pagination">
            <div className="flex items-center space-x-2">
              <Button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                variant="outline"
                className="cyber-btn-outline"
                data-testid="button-previous-page"
              >
                Previous
              </Button>
              <span className="text-gray-300 px-4 font-mono" data-testid="page-info">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                variant="outline"
                className="cyber-btn-outline"
                data-testid="button-next-page"
              >
                Next
              </Button>
            </div>
          </div>
        )}

        {/* Student Statistics */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Student <span className="text-cyber-purple">Statistics</span>
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="cyber-card text-center" data-testid="stat-total-students">
              <Users className="mx-auto mb-2 text-cyber-purple" />
              <div className="text-3xl font-bold text-cyber-purple mb-2">{students?.length || 0}</div>
              <div className="text-gray-300">Total Students</div>
            </div>
            <div className="cyber-card text-center" data-testid="stat-faculty-mentors">
              <GraduationCap className="mx-auto mb-2 text-cyber-green" />
              <div className="text-3xl font-bold text-cyber-green mb-2">{faculty?.length || 0}</div>
              <div className="text-gray-300">Faculty Mentors</div>
            </div>
            <div className="cyber-card text-center" data-testid="stat-research-areas">
              <BookOpen className="mx-auto mb-2 text-cyber-cyan" />
              <div className="text-3xl font-bold text-cyber-cyan mb-2">
                {new Set(students?.map(s => s.researchInterest)).size || 0}
              </div>
              <div className="text-gray-300">Research Areas</div>
            </div>
            <div className="cyber-card text-center" data-testid="stat-active-research">
              <TrendingUp className="mx-auto mb-2 text-cyber-purple" />
              <div className="text-3xl font-bold text-cyber-purple mb-2">95%</div>
              <div className="text-gray-300">Active in Research</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
