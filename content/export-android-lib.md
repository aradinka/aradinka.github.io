---
title: "export-android-lib"
tags:
- all-post
enableToc: false
---

#### Default

Default AndroidManifest.xml

```xml
<?xml version="1.0" encoding="utf-8"?>  
<manifest xmlns:android="http://schemas.android.com/apk/res/android"  
    xmlns:tools="http://schemas.android.com/tools">  
  
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />  
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
     <application
        android:allowBackup="true"
        android:dataExtractionRules="@xml/data_extraction_rules"
        android:fullBackupContent="@xml/backup_rules"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:supportsRtl="true"
        android:theme="@style/Theme.MiniOCR"
        tools:targetApi="31">
        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
<!--        <activity-->
<!--            android:name=".MainActivity"-->
<!--            android:exported="true">-->
<!--            <intent-filter>-->
<!--                <action android:name="android.intent.action.MAIN" />-->

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
<!--                <category android:name="android.intent.category.LAUNCHER" />-->
<!--            </intent-filter>-->
<!--        </activity>-->
    </application>

</manifest>
```

build.gradle

```
plugins {
	id 'com.android.application'
}

defaultConfig {  
	applicationId "com.miniocr"
}
```

#### Export

AndroidManifest.xlm (export aar)

```xml
<?xml version="1.0" encoding="utf-8"?>  
<manifest xmlns:android="http://schemas.android.com/apk/res/android"  
    xmlns:tools="http://schemas.android.com/tools">  
  
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />  
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />  
  
    <application  
        tools:targetApi="31">  
<!--        <activity-->  
<!--            android:name=".MainActivity"-->  
<!--            android:exported="true">-->  
<!--            <intent-filter>-->  
<!--                <action android:name="android.intent.action.MAIN" />-->  
  
<!--                <category android:name="android.intent.category.LAUNCHER" />-->  
<!--            </intent-filter>-->  
<!--        </activity>-->  
    </application>  
  
</manifest>
```

build.gradle

```
plugins {  
	id 'com.android.library'  
}

defaultConfig {  
//        remove applicationId to create aar file  
//        applicationId "com.miniocr"
}
```


res to remove

![[res-to-remove-aar.png]]