import { I18N_KEYS } from "../../const/i18n-const";


export const FORM_ERROR_MESSAGES_I18N_KEYS: Record<string, (error?: any) => string> = {
  required: () => I18N_KEYS.LABEL.UI_FEEDBACK_MESSAGING.FORM.ERROR.REQUIRED,
  pattern: () => I18N_KEYS.LABEL.UI_FEEDBACK_MESSAGING.FORM.ERROR.INVALID_FORMAT,
};
