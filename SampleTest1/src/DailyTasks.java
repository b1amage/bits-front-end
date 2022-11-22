public class DailyTasks {
    private Task[] taskAt;
    private static int HOURS = 24;

    public DailyTasks() {
        taskAt = new Task[HOURS];
        for (int i = 0; i < HOURS; i++) {
            taskAt[i] = null;
        }
    }

    // complexity O(1)
    public boolean validateTask(Task task) {
        return task.getStartTime() + task.getDuration() <= 24;
    }

    // complexity O(1)
    private boolean addTask(Task task) {
        if (!validateTask(task)) return false;

        // overlap
        for (int i = task.getStartTime(); i < task.getStartTime() + task.getDuration(); i++) {
            if (taskAt[i] != null) return false;
        }

        for (int i = task.getStartTime(); i < task.getStartTime() + task.getDuration(); i++) {
            taskAt[i] = task;
        }

        return true;
    }

    // complexity O(1)
    private String nextTask(int time) {
        for (int i = time; i < HOURS; i++) {
            if (taskAt[i] != null && taskAt[i].getStartTime() >= time) {
                return taskAt[i].getDescription();
            }
        }
        return "";
    }

    private void show() {
        for (int i = 0; i < HOURS; i++) {
            System.out.println("At " + i +": " + taskAt[i]);
        }
    }

    public static void main(String[] args) {
        Task t1 = new Task("Learn DSA", 10, 2);
        Task t2 = new Task("Programming", 8, 2);
        Task t3 = new Task("Ethical hacking", 20, 2);

        DailyTasks dailyTasks = new DailyTasks();
        dailyTasks.addTask(t1);
        dailyTasks.addTask(t2);
        dailyTasks.addTask(t3);

        dailyTasks.show();

        System.out.println(dailyTasks.nextTask(17));
    }
}

class Task {
    private String description;
    private int startTime;
    private int duration;

    public Task(String description, int startTime, int duration) {
        this.description = description;
        this.startTime = startTime;
        this.duration = duration;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getStartTime() {
        return startTime;
    }

    public void setStartTime(int startTime) {
        this.startTime = startTime;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    @Override
    public String toString() {
        return "Task{" +
                "description='" + description + '\'' +
                ", startTime=" + startTime +
                ", duration=" + duration +
                '}';
    }
}
