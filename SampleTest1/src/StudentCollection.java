public class StudentCollection {
    private Student[] list;
    private static int SIZE = 100;
    private int currentIndex = 0;

    public StudentCollection() {
        this.list = new Student[SIZE];
    }

    // complexity = O(N)
    public void addStudent(Student std) {
        if (currentIndex >= SIZE) return;

        // Check id
        for (int i = 0; i < currentIndex; i++) {
            if (list[i].getId().equals(std.getId())) return;
        }

        list[currentIndex] = std;
        currentIndex++;
    }

    // complexity = O(N)
    public Student searchByName(String name) {
        for (int i = 0; i < currentIndex; i++) {
            if (list[i].getName().contains(name)) return list[i];
        }
        return null;
    }

    // complexity = O(N)
    public int rankStudent(String sId) {
        // check if id exist
        Student s = null;
        for (int i = 0; i< currentIndex; i++) {
            if (sId.equals(list[i].getId())) {
                s = list[i];
                break;
            }
        }
        if (s == null) return -1;

        int rank = 1;

        for (int i = 0; i < currentIndex; i++) {
            if (list[i].getId().equals(sId)) continue;
            if (list[i].getGpa() > s.getGpa()) rank++;
        }

        return rank;
    }

    private void show() {
        for (int i = 0; i < currentIndex; i++) {
            System.out.println(list[i]);
        }
    }


    public static void main(String[] args) {
        Student std1 = new Student("1", "Bao Nguyen", 3.2);
        Student std2 = new Student("2", "Quynh La", 3.8);
        Student std3 = new Student("1", "Khanh Ha", 3.6);
        Student std4 = new Student("3", "Truc Ngan", 3.75);

        StudentCollection studentCollection = new StudentCollection();
        studentCollection.addStudent(std1);
        studentCollection.addStudent(std2);
        studentCollection.addStudent(std3);
        studentCollection.addStudent(std4);
        studentCollection.show();

        Student student = studentCollection.searchByName("La");
        System.out.println(student);

        System.out.println(studentCollection.rankStudent("2"));

    }

}

class Student {
    private String id;
    private String name;
    private double gpa;

    public Student(String id, String name, double gpa) {
        this.id = id;
        this.name = name;
        this.gpa = gpa;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getGpa() {
        return gpa;
    }

    public void setGpa(double gpa) {
        this.gpa = gpa;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", gpa=" + gpa +
                '}';
    }
}
