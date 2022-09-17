import { togglesidebar } from "./toggle-sidebar";
import { show_add_Task } from "./show-task-form";
import { add_task } from "./add-task";
import { showHome } from "./home";

function loadDom() {
  togglesidebar();
  showHome();
  add_task();
  show_add_Task();
}

export { loadDom };
