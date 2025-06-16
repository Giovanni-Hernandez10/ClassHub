import "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function HomePage() {
  return (
    <div className="home-page px-6 py-12">
      <div className="about-text max-w-2xl mx-auto text-center mb-12">
        <p className="text-lg text-muted-foreground">
          At ClassHub, we scan your syllabus and keep you on track with all your important dates and deadlines
          by syncing your Google Calendar. We also provide a community of students that are taking similar courses.
          Start your academic journey with ClassHub and stay ahead.
        </p>
      </div>

      <div className="feature-cards grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Feature 1 */}
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle>Instant Syllabus Scanning</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Upload your class syllabus and let our AI extract important information in seconds—no more manual input.
            </p>
          </CardContent>
        </Card>

        {/* Feature 2 */}
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle>Google Calendar Integration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Automatically create and sync key class dates and deadlines from your syllabus directly to your calendar.
            </p>
          </CardContent>
        </Card>

        {/* Feature 3 */}
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle>Auto-Enrolled Class Group Chats</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Connect with classmates instantly—get added to group chats for your classes right after scanning your syllabus.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}