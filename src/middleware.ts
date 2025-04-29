import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // publicRoutes: [
  //   "/",
  //   "/api/clerk-webhook",
  //   "/api/drive-activity/notification",
  //   "/api/payment/success",
  // ],
  publicRoutes: ["/(.*)"],
  ignoredRoutes: [
    "/api/auth/callback/discord",
    "/api/auth/callback/notion",
    "/api/auth/callback/slack",
    "/api/outlook/callback",
    "/api/googleCalendar/callback",
    "/api/flow",
    "/api/cron/wait",
    "/dashboard",
    "/insights",
    "/settings",
    "/All-libraries",
    "/All-libraries/my-libraries/element-libraries",
    "/All-libraries/shared-libraries",
    "/manage-vendors",
    "/clients",
    "/billing",
    "/templates",
    "/client-settings",
    "/clinet-info",
    "/clients/1/client-info",
    "/clients/default-id/client-users",
    "/clients/default-id/other-details",
    "/clients/default-id/client-invoices",
    "/clients/undefined/payments-from-client",
    '/clients/undefined/client-invoices',
    "/clients/default-id/client-projects",
    '/manage-vendors/1/vendor-users',
    '/manage-vendors/1/other-details',
    "/clients/default-id/client-projects/1",
    "/clients/default-id/client-projects/1/client-projects",
    "/clients/default-id/client-projects/1/client-projects/1",
    "/manage-vendors/1/vendor-info",
    "/clients/default-id/client-projects/1/client-projects/1/client-projects",
    "/clients/default-id/client-projects/1/client-projects/1/client-projects/1",
    "/clients/default-id/client-projects/1/client-projects/1/client-projects/1/client-projects",
    "/clients/default-id/client-projects/1/client-projects/1/client-projects/1/client-projects/1",
    "/clients/default-id/client-tasks",
    "/clients/default-id/client-tasks/1",
    "/clients/default-id/client-tasks/1/client-tasks",
    "/clients/default-id/client-tasks/1/client-tasks/1",
    "/clients/default-id/client-tasks/1/client-tasks/1/client-tasks",
    "/clients/default-id/client-tasks/1/client-tasks/1/client-tasks/1",
    "/clients/default-id/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks",
    "/clients/default-id/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks/1",
    "/clients/default-id/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks",
    "/clients/default-id/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks/1",
    "/clients/default-id/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks",
    "/clients/default-id/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks/1",
    "/clients/default-id/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks",
    "/clients/default-id/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks/1",
    "/clients/default-id/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks",
    "/clients/default-id/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks/1",
    "/clients/default-id/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks/1/client-tasks",

  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

// https://www.googleapis.com/auth/userinfo.email
// https://www.googleapis.com/auth/userinfo.profile
// https://www.googleapis.com/auth/drive.activity.readonly
// https://www.googleapis.com/auth/drive.metadata
// https://www.googleapis.com/auth/drive.readonly
