import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/action";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

export default function TaskList() {
  const tasks = useSelector((state) => state.tasks || []); 
  const dispatch = useDispatch();

  const sortedTasks = [...tasks].sort((a, b) => {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <div className="mt-4">
      {sortedTasks.length === 0 ? (
        <Typography variant="h6" className="text-center text-secondary">
          No tasks added yet.
        </Typography>
      ) : (
        <AnimatePresence>
          {sortedTasks.map((task, index) => {
            const taskText = task.text || "Untitled Task";
            const taskPriority = task.priority || "Medium"; 

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className={`mt-3 task-card text-center ${taskPriority.toLowerCase()}`}>
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        display: "block", 
                        wordWrap: "break-word", 
                        maxWidth: "100%", 
                      }}
                    >
                      {taskText}
                    </Typography>
                    <Typography variant="body2">🔥 Priority: {taskPriority}</Typography>
                    <Button
                      variant="outlined"
                      color="error"
                      className="mt-2"
                      onClick={() => dispatch(deleteTask(index))}
                    >
                      ❌ Delete
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </AnimatePresence>
      )}
    </div>
  );
}
