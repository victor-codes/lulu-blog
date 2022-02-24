---
layout: blog
title: Getting Started with Identity and Access Management (IAM) in AWS
date: 2022-02-23T15:31:23.443Z
tags: AWS
category: DevOps
subCategory: AWS
slug: getting-started-with-identity-and-access-management-iam-in-aws
---
As cloud practitioners, we should be aware of the importance of IAM, as it is used by all cloud service providers. When attempting to perform an action on AWS, you must first go through IAM to identify yourself and whether or not permission to perform that action has been granted.

## What is IAM?

Identity and Access Management (IAM) is used to secure and control who has access to specific resources and permissions on an account. Organisations can easily manage resources by assigning them to different types of users using IAM. The roles of a Database Administrator and a CyberSecurity Engineer, for example, are different. As a result, the account administrator would use IAM to grant different permissions to each user in order to prevent one from interfering with the other.

## Users, Groups and Roles in AWS IAM

With AWS, you can create IAM user accounts, user groups and roles for individuals in your organisation. For instance;

If an organisation, say "\*Orange\*," has different departments that need access to its AWS resources, they can be granted access as \*\*IAM users\*\* and placed in \*\*groups\*\* with the same permissions based on department or resource type. Administrators, developers, cloud architects, and so on. 

In summary, an IAM user is an entity within an account that has been granted certain permissions to utilise the AWS account's or organisation's resources, whereas IAM user groups are used to provide permissions for a set of IAM users. This makes managing user permissions a little easier.

\*\*IAM roles\*\*, on the other hand, can be used by \*Orange\* to allow access to individuals or programs that require access to its AWS resources. Using roles, access can be granted to people, apps, and services that are not tied with the organisation's AWS account.

An IAM role is a set of permissions that can be assumed by anyone who requires them. This means that anyone, both inside and outside of an organisation, can take on a role. Because roles do not have long-term security credentials, assuming a role gives you temporary security credentials for your role session.

## How to create an IAM user on AWS

As a security measure, it is recommended to log in as an IAM user rather than a root user when using cloud services. The root user is the user account created to have access to AWS. Changing account settings/plans or terminating your account, establishing IAM access to the billing and cost management panel, or restoring IAM permissions if unintentionally revoked are just a few of the actions that should be performed as a root user.

To get started with AWS, you can [create a free-tier account](https://aws.amazon.com/free/?trk=ps_a134p000006pkrzAAA&trkCampaign=acq_paid_search_brand&sc_channel=ps&sc_campaign=acquisition_BEN&sc_publisher=Bing&sc_category=core-main&sc_country=BEN&sc_geo=EMEA&sc_outcome=ACQ&sc_detail=%2Baws&sc_content=Brand_Core_aws_bmm&sc_matchtype=p&sc_segment=&sc_medium=ACQ-P|PS-BI|Brand|Desktop|SU|Core-Main|Core|BEN|EN|Text&ef_id=8b466bcd56ca16301ae90a95c1c3d7f9:G:s&s_kwcid=AL!4422!10!71743287147518!71743730462034&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all) that allows you to make use of some AWS resources without incurring any charges for a period of 12 months.

There are a lot of services offered by AWS. To start exploring, [Log in](https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Fconsole%2Fhome%3Ffromtb%3Dtrue%26hashArgs%3D%2523%26isauthcode%3Dtrue%26state%3DhashArgsFromTB_us-east-1_ebf0fab1bbf4def0&client_id=arn%3Aaws%3Asignin%3A%3A%3Aconsole%2Fcanvas&forceMobileApp=0&code_challenge=aNOlpejZzZyWK_phziiMSbsOasDi-zkVdOq7nZ3QaG4&code_challenge_method=SHA-256) to your console as the root user to create an IAM user and group, then select \*\*IAM\*\* under "Security, Identity, and Compliance."

![](/image/screenshot-2021-10-02-at-18.34.23.png)

Select users from the IAM dashboard's sidebar and click the option to add a new user. Once you do so, you can start setting up the user's details.

![](/image/screenshot-2021-10-02-at-18.48.08.png)

You can use a friendly name or a first name as the username when creating an IAM user. It is important to enable both the access key and the password in order for the user to connect AWS via the console, AWS API, and CLI. You can either select to have a password generated for you or create one yourself. We can now set up permissions.

![](/image/screenshot-2021-10-02-at-20.23.04.png)

Because user permissions may differ, you can attach policies individually to people rather than grouping them. However, if the permissions are all the same, you should create a user group to make things easier in the long term. Then you can proceed by adding tags that contain user details such as job titles or email addresses. This is optional and in most situations, not necessary if you're working as an individual.

![](/image/screenshot-2021-10-02-at-20.45.32.png)

Now that everything is in place, you can review your user permissions and create the IAM user, then navigate to the sign-in page and log in as an IAM user.

## Permissions and Policies in AWS

Policies are objects that specify an IAM identity's permissions (role, user or group), and are used to manage access in AWS. When you make a request on AWS, it analyses the policies associated with the identity to know if it’s permitted to grant access to that resource. This is what determines whether the request is granted or denied.

Policies in AWS are classified into Identity-Based Policies, Resource-Based Policies, Permissions Boundaries, Organisational SCPs, Access Control Lists, and Session Policies.

Many of these policies come in JSON format. For instance, identity-based policies are policies you attach to a user or role. Session policies are JSON policy documents attached when a user assumes a role, Resource-based policies are JSON documents you can attach to a resource, and SCPs are JSON policy documents that you attach to an Organization’s organizational unit.

In AWS, IAM policies have a structure that consists of

* Version — policy language version,
* id — an optional identifier for the policy,
* Statement — one or more statements that consist of `sid`, `effect`, `principal`, `action`, `resource`, `condition`.

  * The `sid` is an optional identifier for the statement.
  * `effect` determines whether the statement allows or denies access to the action. Its value is usually “Allow” or “Deny”.
  * `principal` states the account, user or role to which this policy is applied.
  * `action` is the list of actions that this policy allows or denies.
  * `resource` is the list of resources to which the actions apply.
  * `condition` is used to state the conditions for when this policy will take effect.

A typical JSON policy in AWS looks like this;

```json
{
    "Version": "2012-10-17",
    "Statement": {
        "Effect": "Allow",
        "Action": \[
            "iam:Get\*",
            "iam:List\*",
            "iam:Generate\*"
        ],
        "Resource": "\*"
    }
}
```

This policy above allows an IAM user to have \*\*read-only\*\* access to the IAM console.

## Wrapping up

Understanding the basics of access management is important for everyone that works with cloud service providers, even if you work individually because it’s an amazing way to manage resources on your account, and scale your product/project easier when you need to.

I hope you enjoyed reading this tutorial and found it useful. Feel free to drop questions in the comments, if any.