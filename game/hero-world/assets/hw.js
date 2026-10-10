(()=>{var Ag=Object.defineProperty;var yi=(n,t)=>{for(var e in t)Ag(n,e,{get:t[e],enumerable:!0})};var Vd=0,Ah=1,Hd=2;var ho=1,Gd=2,cr=3,ps=0,Rn=1,Jn=2,Ci=0,hr=1,Eh=2,Th=3,Ch=4,Wd=5;var Ps=100,Xd=101,qd=102,Yd=103,$d=104,Zd=200,Jd=201,Kd=202,jd=203,Rh=204,Ih=205,Qd=206,tp=207,ep=208,np=209,ip=210,sp=211,rp=212,op=213,ap=214,Ia=0,Pa=1,La=2,ir=3,Da=4,Na=5,Ua=6,Fa=7,Ph=0,lp=1,cp=2,ci=0,Lh=1,Dh=2,Nh=3,Uh=4,Fh=5,Oh=6,Bh=7;var zh=300,ms=301,Ls=302,fl=303,dl=304,uo=306,Oa=1e3,Si=1001,Ba=1002,un=1003,hp=1004;var fo=1005;var rn=1006,pl=1007;var gs=1008;var zn=1009,kh=1010,Vh=1011,ur=1012,ml=1013,hi=1014,ui=1015,fi=1016,gl=1017,xl=1018,fr=1020,Hh=35902,Gh=35899,Wh=1021,Xh=1022,Kn=1023,wi=1026,xs=1027,qh=1028,_l=1029,_s=1030,yl=1031;var vl=1033,po=33776,mo=33777,go=33778,xo=33779,Ml=35840,bl=35841,Sl=35842,wl=35843,Al=36196,El=37492,Tl=37496,Cl=37488,Rl=37489,_o=37490,Il=37491,Pl=37808,Ll=37809,Dl=37810,Nl=37811,Ul=37812,Fl=37813,Ol=37814,Bl=37815,zl=37816,kl=37817,Vl=37818,Hl=37819,Gl=37820,Wl=37821,Xl=36492,ql=36494,Yl=36495,$l=36283,Zl=36284,yo=36285,Jl=36286;var Gr=2300,za=2301,Ta=2302,_h=2303,yh=2400,vh=2401,Mh=2402;var up=3200;var Yh=0,fp=1,Gi="",sn="srgb",Wr="srgb-linear",Xr="linear",Ue="srgb";var Ca=7680;var dp=519,pp=512,mp=513,gp=514,Kl=515,xp=516,_p=517,jl=518,yp=519,$h=35044;var Zh="300 es",li=2e3,qr=2001;function Eg(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Tg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Yr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function vp(){let n=Yr("canvas");return n.style.display="block",n}var pd={},sr=null;function $r(...n){let t="THREE."+n.shift();sr?sr("log",t,...n):console.log(t,...n)}function Mp(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ae(...n){n=Mp(n);let t="THREE."+n.shift();if(sr)sr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function le(...n){n=Mp(n);let t="THREE."+n.shift();if(sr)sr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Ts(...n){let t=n.join(" ");t in pd||(pd[t]=!0,ae(...n))}function bp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Sp={[Ia]:Pa,[La]:Ua,[Da]:Fa,[ir]:Na,[Pa]:Ia,[Ua]:La,[Fa]:Da,[Na]:ir},Ai=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ra=Math.PI/180,ka=180/Math.PI;function rs(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[e&63|128]+xn[e>>8&255]+"-"+xn[e>>16&255]+xn[e>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function Se(n,t,e){return Math.max(t,Math.min(e,n))}function Cg(n,t){return(n%t+t)%t}function $c(n,t,e){return(1-e)*n+e*t}function Mi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ze(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var tu=class tu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};tu.prototype.isVector2=!0;var _e=tu,Ei=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],p=i[s+2],d=i[s+3],m=r[o+0],f=r[o+1],_=r[o+2],v=r[o+3];if(d!==v||c!==m||l!==f||p!==_){let g=c*m+l*f+p*_+d*v;g<0&&(m=-m,f=-f,_=-_,v=-v,g=-g);let x=1-a;if(g<.9995){let C=Math.acos(g),L=Math.sin(C);x=Math.sin(x*C)/L,a=Math.sin(a*C)/L,c=c*x+m*a,l=l*x+f*a,p=p*x+_*a,d=d*x+v*a}else{c=c*x+m*a,l=l*x+f*a,p=p*x+_*a,d=d*x+v*a;let C=1/Math.sqrt(c*c+l*l+p*p+d*d);c*=C,l*=C,p*=C,d*=C}}t[e]=c,t[e+1]=l,t[e+2]=p,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],p=i[s+3],d=r[o],m=r[o+1],f=r[o+2],_=r[o+3];return t[e]=a*_+p*d+c*f-l*m,t[e+1]=c*_+p*m+l*d-a*f,t[e+2]=l*_+p*f+a*m-c*d,t[e+3]=p*_-a*d-c*m-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),p=a(s/2),d=a(r/2),m=c(i/2),f=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=m*p*d+l*f*_,this._y=l*f*d-m*p*_,this._z=l*p*_+m*f*d,this._w=l*p*d-m*f*_;break;case"YXZ":this._x=m*p*d+l*f*_,this._y=l*f*d-m*p*_,this._z=l*p*_-m*f*d,this._w=l*p*d+m*f*_;break;case"ZXY":this._x=m*p*d-l*f*_,this._y=l*f*d+m*p*_,this._z=l*p*_+m*f*d,this._w=l*p*d-m*f*_;break;case"ZYX":this._x=m*p*d-l*f*_,this._y=l*f*d+m*p*_,this._z=l*p*_-m*f*d,this._w=l*p*d+m*f*_;break;case"YZX":this._x=m*p*d+l*f*_,this._y=l*f*d+m*p*_,this._z=l*p*_-m*f*d,this._w=l*p*d-m*f*_;break;case"XZY":this._x=m*p*d-l*f*_,this._y=l*f*d-m*p*_,this._z=l*p*_+m*f*d,this._w=l*p*d+m*f*_;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],p=e[6],d=e[10],m=i+a+d;if(m>0){let f=.5/Math.sqrt(m+1);this._w=.25/f,this._x=(p-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(p-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+p)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+p)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,p=e._w;return this._x=i*p+o*a+s*l-r*c,this._y=s*p+o*c+r*a-i*l,this._z=r*p+o*l+i*c-s*a,this._w=o*p-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),p=Math.sin(l);c=Math.sin(c*l)/p,e=Math.sin(e*l)/p,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},eu=class eu{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(md.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(md.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),p=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+c*l+o*d-a*p,this.y=i+c*p+a*l-r*d,this.z=s+c*d+r*p-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Zc.copy(this).projectOnVector(t),this.sub(Zc)}reflect(t){return this.sub(Zc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};eu.prototype.isVector3=!0;var K=eu,Zc=new K,md=new Ei,nu=class nu{constructor(t,e,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){let p=this.elements;return p[0]=t,p[1]=s,p[2]=a,p[3]=e,p[4]=r,p[5]=c,p[6]=i,p[7]=o,p[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],p=i[4],d=i[7],m=i[2],f=i[5],_=i[8],v=s[0],g=s[3],x=s[6],C=s[1],L=s[4],T=s[7],S=s[2],R=s[5],N=s[8];return r[0]=o*v+a*C+c*S,r[3]=o*g+a*L+c*R,r[6]=o*x+a*T+c*N,r[1]=l*v+p*C+d*S,r[4]=l*g+p*L+d*R,r[7]=l*x+p*T+d*N,r[2]=m*v+f*C+_*S,r[5]=m*g+f*L+_*R,r[8]=m*x+f*T+_*N,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],p=t[8];return e*o*p-e*a*l-i*r*p+i*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],p=t[8],d=p*o-a*l,m=a*c-p*r,f=l*r-o*c,_=e*d+i*m+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return t[0]=d*v,t[1]=(s*l-p*i)*v,t[2]=(a*i-s*o)*v,t[3]=m*v,t[4]=(p*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(i*c-l*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Ts("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jc.makeScale(t,e)),this}rotate(t){return Ts("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jc.makeRotation(-t)),this}translate(t,e){return Ts("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};nu.prototype.isMatrix3=!0;var fe=nu,Jc=new fe,gd=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xd=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rg(){let n={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ue&&(s.r=Hi(s.r),s.g=Hi(s.g),s.b=Hi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ue&&(s.r=nr(s.r),s.g=nr(s.g),s.b=nr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gi?Xr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ts("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ts("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Wr]:{primaries:t,whitePoint:i,transfer:Xr,toXYZ:gd,fromXYZ:xd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:t,whitePoint:i,transfer:Ue,toXYZ:gd,fromXYZ:xd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),n}var Me=Rg();function Hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function nr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var zs,Va=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{zs===void 0&&(zs=Yr("canvas")),zs.width=t.width,zs.height=t.height;let s=zs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=zs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Yr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Hi(e[i]/255)*255):e[i]=Hi(e[i]);return{data:e,width:t.width,height:t.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ig=0,rr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=rs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Kc(s[o].image)):r.push(Kc(s[o]))}else r=Kc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Kc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Va.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}var Pg=0,jc=new K,mn=class n extends Ai{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Si,s=Si,r=rn,o=gs,a=Kn,c=zn,l=n.DEFAULT_ANISOTROPY,p=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=rs(),this.name="",this.source=new rr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jc).x}get height(){return this.source.getSize(jc).y}get depth(){return this.source.getSize(jc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){ae(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ae(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Oa:t.x=t.x-Math.floor(t.x);break;case Si:t.x=t.x<0?0:1;break;case Ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Oa:t.y=t.y-Math.floor(t.y);break;case Si:t.y=t.y<0?0:1;break;case Ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=zh;mn.DEFAULT_ANISOTROPY=1;var iu=class iu{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],p=c[4],d=c[8],m=c[1],f=c[5],_=c[9],v=c[2],g=c[6],x=c[10];if(Math.abs(p-m)<.01&&Math.abs(d-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(p+m)<.1&&Math.abs(d+v)<.1&&Math.abs(_+g)<.1&&Math.abs(l+f+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let L=(l+1)/2,T=(f+1)/2,S=(x+1)/2,R=(p+m)/4,N=(d+v)/4,b=(_+g)/4;return L>T&&L>S?L<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(L),s=R/i,r=N/i):T>S?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=R/s,r=b/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=N/r,s=b/r),this.set(i,s,r,e),this}let C=Math.sqrt((g-_)*(g-_)+(d-v)*(d-v)+(m-p)*(m-p));return Math.abs(C)<.001&&(C=1),this.x=(g-_)/C,this.y=(d-v)/C,this.z=(m-p)/C,this.w=Math.acos((l+f+x-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this.w=Se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this.w=Se(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};iu.prototype.isVector4=!0;var $e=iu,Ha=class extends Ai{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new $e(0,0,t,e),this.scissorTest=!1,this.viewport=new $e(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new mn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new rr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ln=class extends Ha{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Zr=class extends mn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ga=class extends mn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ul=class ul{constructor(t,e,i,s,r,o,a,c,l,p,d,m,f,_,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,p,d,m,f,_,v,g)}set(t,e,i,s,r,o,a,c,l,p,d,m,f,_,v,g){let x=this.elements;return x[0]=t,x[4]=e,x[8]=i,x[12]=s,x[1]=r,x[5]=o,x[9]=a,x[13]=c,x[2]=l,x[6]=p,x[10]=d,x[14]=m,x[3]=f,x[7]=_,x[11]=v,x[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ul().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/ks.setFromMatrixColumn(t,0).length(),r=1/ks.setFromMatrixColumn(t,1).length(),o=1/ks.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),p=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let m=o*p,f=o*d,_=a*p,v=a*d;e[0]=c*p,e[4]=-c*d,e[8]=l,e[1]=f+_*l,e[5]=m-v*l,e[9]=-a*c,e[2]=v-m*l,e[6]=_+f*l,e[10]=o*c}else if(t.order==="YXZ"){let m=c*p,f=c*d,_=l*p,v=l*d;e[0]=m+v*a,e[4]=_*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*p,e[9]=-a,e[2]=f*a-_,e[6]=v+m*a,e[10]=o*c}else if(t.order==="ZXY"){let m=c*p,f=c*d,_=l*p,v=l*d;e[0]=m-v*a,e[4]=-o*d,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*p,e[9]=v-m*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let m=o*p,f=o*d,_=a*p,v=a*d;e[0]=c*p,e[4]=_*l-f,e[8]=m*l+v,e[1]=c*d,e[5]=v*l+m,e[9]=f*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let m=o*c,f=o*l,_=a*c,v=a*l;e[0]=c*p,e[4]=v-m*d,e[8]=_*d+f,e[1]=d,e[5]=o*p,e[9]=-a*p,e[2]=-l*p,e[6]=f*d+_,e[10]=m-v*d}else if(t.order==="XZY"){let m=o*c,f=o*l,_=a*c,v=a*l;e[0]=c*p,e[4]=-d,e[8]=l*p,e[1]=m*d+v,e[5]=o*p,e[9]=f*d-_,e[2]=_*d-f,e[6]=a*p,e[10]=v*d+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lg,t,Dg)}lookAt(t,e,i){let s=this.elements;return Fn.subVectors(t,e),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),ts.crossVectors(i,Fn),ts.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),ts.crossVectors(i,Fn)),ts.normalize(),jo.crossVectors(Fn,ts),s[0]=ts.x,s[4]=jo.x,s[8]=Fn.x,s[1]=ts.y,s[5]=jo.y,s[9]=Fn.y,s[2]=ts.z,s[6]=jo.z,s[10]=Fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],p=i[1],d=i[5],m=i[9],f=i[13],_=i[2],v=i[6],g=i[10],x=i[14],C=i[3],L=i[7],T=i[11],S=i[15],R=s[0],N=s[4],b=s[8],A=s[12],U=s[1],B=s[5],Z=s[9],z=s[13],O=s[2],k=s[6],j=s[10],$=s[14],it=s[3],J=s[7],nt=s[11],ot=s[15];return r[0]=o*R+a*U+c*O+l*it,r[4]=o*N+a*B+c*k+l*J,r[8]=o*b+a*Z+c*j+l*nt,r[12]=o*A+a*z+c*$+l*ot,r[1]=p*R+d*U+m*O+f*it,r[5]=p*N+d*B+m*k+f*J,r[9]=p*b+d*Z+m*j+f*nt,r[13]=p*A+d*z+m*$+f*ot,r[2]=_*R+v*U+g*O+x*it,r[6]=_*N+v*B+g*k+x*J,r[10]=_*b+v*Z+g*j+x*nt,r[14]=_*A+v*z+g*$+x*ot,r[3]=C*R+L*U+T*O+S*it,r[7]=C*N+L*B+T*k+S*J,r[11]=C*b+L*Z+T*j+S*nt,r[15]=C*A+L*z+T*$+S*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],p=t[2],d=t[6],m=t[10],f=t[14],_=t[3],v=t[7],g=t[11],x=t[15],C=c*f-l*m,L=a*f-l*d,T=a*m-c*d,S=o*f-l*p,R=o*m-c*p,N=o*d-a*p;return e*(v*C-g*L+x*T)-i*(_*C-g*S+x*R)+s*(_*L-v*S+x*N)-r*(_*T-v*R+g*N)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],p=t[10];return e*(o*p-a*l)-i*(r*p-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],p=t[8],d=t[9],m=t[10],f=t[11],_=t[12],v=t[13],g=t[14],x=t[15],C=e*a-i*o,L=e*c-s*o,T=e*l-r*o,S=i*c-s*a,R=i*l-r*a,N=s*l-r*c,b=p*v-d*_,A=p*g-m*_,U=p*x-f*_,B=d*g-m*v,Z=d*x-f*v,z=m*x-f*g,O=C*z-L*Z+T*B+S*U-R*A+N*b;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/O;return t[0]=(a*z-c*Z+l*B)*k,t[1]=(s*Z-i*z-r*B)*k,t[2]=(v*N-g*R+x*S)*k,t[3]=(m*R-d*N-f*S)*k,t[4]=(c*U-o*z-l*A)*k,t[5]=(e*z-s*U+r*A)*k,t[6]=(g*T-_*N-x*L)*k,t[7]=(p*N-m*T+f*L)*k,t[8]=(o*Z-a*U+l*b)*k,t[9]=(i*U-e*Z-r*b)*k,t[10]=(_*R-v*T+x*C)*k,t[11]=(d*T-p*R-f*C)*k,t[12]=(a*A-o*B-c*b)*k,t[13]=(e*B-i*A+s*b)*k,t[14]=(v*L-_*S-g*C)*k,t[15]=(p*S-d*L+m*C)*k,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,p=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,p*a+i,p*c-s*o,0,l*c-s*a,p*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,p=o+o,d=a+a,m=r*l,f=r*p,_=r*d,v=o*p,g=o*d,x=a*d,C=c*l,L=c*p,T=c*d,S=i.x,R=i.y,N=i.z;return s[0]=(1-(v+x))*S,s[1]=(f+T)*S,s[2]=(_-L)*S,s[3]=0,s[4]=(f-T)*R,s[5]=(1-(m+x))*R,s[6]=(g+C)*R,s[7]=0,s[8]=(_+L)*N,s[9]=(g-C)*N,s[10]=(1-(m+v))*N,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=ks.set(s[0],s[1],s[2]).length(),a=ks.set(s[4],s[5],s[6]).length(),c=ks.set(s[8],s[9],s[10]).length();r<0&&(o=-o),si.copy(this);let l=1/o,p=1/a,d=1/c;return si.elements[0]*=l,si.elements[1]*=l,si.elements[2]*=l,si.elements[4]*=p,si.elements[5]*=p,si.elements[6]*=p,si.elements[8]*=d,si.elements[9]*=d,si.elements[10]*=d,e.setFromRotationMatrix(si),i.x=o,i.y=a,i.z=c,this}makePerspective(t,e,i,s,r,o,a=li,c=!1){let l=this.elements,p=2*r/(e-t),d=2*r/(i-s),m=(e+t)/(e-t),f=(i+s)/(i-s),_,v;if(c)_=r/(o-r),v=o*r/(o-r);else if(a===li)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===qr)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=p,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=li,c=!1){let l=this.elements,p=2/(e-t),d=2/(i-s),m=-(e+t)/(e-t),f=-(i+s)/(i-s),_,v;if(c)_=1/(o-r),v=o/(o-r);else if(a===li)_=-2/(o-r),v=-(o+r)/(o-r);else if(a===qr)_=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=p,l[4]=0,l[8]=0,l[12]=m,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};ul.prototype.isMatrix4=!0;var qe=ul,ks=new K,si=new qe,Lg=new K(0,0,0),Dg=new K(1,1,1),ts=new K,jo=new K,Fn=new K,_d=new qe,yd=new Ei,os=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],p=s[9],d=s[2],m=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-p,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-p,f),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return _d.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_d,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yd.setFromEuler(this),this.setFromQuaternion(yd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};os.DEFAULT_ORDER="XYZ";var Jr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ng=0,vd=new K,Vs=new Ei,Oi=new qe,Qo=new K,Ur=new K,Ug=new K,Fg=new Ei,Md=new K(1,0,0),bd=new K(0,1,0),Sd=new K(0,0,1),wd={type:"added"},Og={type:"removed"},Hs={type:"childadded",child:null},Qc={type:"childremoved",child:null},Cn=class n extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new K,e=new os,i=new Ei,s=new K(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new fe}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.premultiply(Vs),this}rotateX(t){return this.rotateOnAxis(Md,t)}rotateY(t){return this.rotateOnAxis(bd,t)}rotateZ(t){return this.rotateOnAxis(Sd,t)}translateOnAxis(t,e){return vd.copy(t).applyQuaternion(this.quaternion),this.position.add(vd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Md,t)}translateY(t){return this.translateOnAxis(bd,t)}translateZ(t){return this.translateOnAxis(Sd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Qo.copy(t):Qo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Ur,Qo,this.up):Oi.lookAt(Qo,Ur,this.up),this.quaternion.setFromRotationMatrix(Oi),s&&(Oi.extractRotation(s.matrixWorld),Vs.setFromRotationMatrix(Oi),this.quaternion.premultiply(Vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wd),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null):le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Og),Qc.child=t,this.dispatchEvent(Qc),Qc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wd),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,t,Ug),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,Fg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,p=c.length;l<p;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),p=o(t.images),d=o(t.shapes),m=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),p.length>0&&(i.images=p),d.length>0&&(i.shapes=d),m.length>0&&(i.skeletons=m),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){let c=[];for(let l in a){let p=a[l];delete p.metadata,c.push(p)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Cn.DEFAULT_UP=new K(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pn=class extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bg={type:"move"},or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,i),x=this._getHandJoint(l,v);g!==null&&(x.matrix.fromArray(g.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=g.radius),x.visible=g!==null}let p=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],m=p.position.distanceTo(d.position),f=.02,_=.005;l.inputState.pinching&&m>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&m<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new pn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},ta={h:0,s:0,l:0};function th(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var ce=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Me.workingColorSpace){return this.r=t,this.g=e,this.b=i,Me.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Me.workingColorSpace){if(t=Cg(t,1),e=Se(e,0,1),i=Se(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=th(o,r,t+1/3),this.g=th(o,r,t),this.b=th(o,r,t-1/3)}return Me.colorSpaceToWorking(this,s),this}setStyle(t,e=sn){function i(r){r!==void 0&&parseFloat(r)<1&&ae("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ae("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ae("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=sn){let i=wp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):ae("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hi(t.r),this.g=Hi(t.g),this.b=Hi(t.b),this}copyLinearToSRGB(t){return this.r=nr(t.r),this.g=nr(t.g),this.b=nr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return Me.workingToColorSpace(_n.copy(this),t),Math.round(Se(_n.r*255,0,255))*65536+Math.round(Se(_n.g*255,0,255))*256+Math.round(Se(_n.b*255,0,255))}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Me.workingColorSpace){Me.workingToColorSpace(_n.copy(this),e);let i=_n.r,s=_n.g,r=_n.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,p=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=p<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=p,t}getRGB(t,e=Me.workingColorSpace){return Me.workingToColorSpace(_n.copy(this),e),t.r=_n.r,t.g=_n.g,t.b=_n.b,t}getStyle(t=sn){Me.workingToColorSpace(_n.copy(this),t);let e=_n.r,i=_n.g,s=_n.b;return t!==sn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(es),this.setHSL(es.h+t,es.s+e,es.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(es),t.getHSL(ta);let i=$c(es.h,ta.h,e),s=$c(es.s,ta.s,e),r=$c(es.l,ta.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new ce;ce.NAMES=wp;var Kr=class extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new os,this.environmentIntensity=1,this.environmentRotation=new os,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ri=new K,Bi=new K,eh=new K,zi=new K,Gs=new K,Ws=new K,Ad=new K,nh=new K,ih=new K,sh=new K,rh=new $e,oh=new $e,ah=new $e,bi=class n{constructor(t=new K,e=new K,i=new K){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ri.subVectors(t,e),s.cross(ri);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ri.subVectors(s,e),Bi.subVectors(i,e),eh.subVectors(t,e);let o=ri.dot(ri),a=ri.dot(Bi),c=ri.dot(eh),l=Bi.dot(Bi),p=Bi.dot(eh),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let m=1/d,f=(l*c-a*p)*m,_=(o*p-a*c)*m;return r.set(1-f-_,_,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,zi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,zi.x),c.addScaledVector(o,zi.y),c.addScaledVector(a,zi.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return rh.setScalar(0),oh.setScalar(0),ah.setScalar(0),rh.fromBufferAttribute(t,e),oh.fromBufferAttribute(t,i),ah.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(rh,r.x),o.addScaledVector(oh,r.y),o.addScaledVector(ah,r.z),o}static isFrontFacing(t,e,i,s){return ri.subVectors(i,e),Bi.subVectors(t,e),ri.cross(Bi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ri.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),ri.cross(Bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Gs.subVectors(s,i),Ws.subVectors(r,i),nh.subVectors(t,i);let c=Gs.dot(nh),l=Ws.dot(nh);if(c<=0&&l<=0)return e.copy(i);ih.subVectors(t,s);let p=Gs.dot(ih),d=Ws.dot(ih);if(p>=0&&d<=p)return e.copy(s);let m=c*d-p*l;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(i).addScaledVector(Gs,o);sh.subVectors(t,r);let f=Gs.dot(sh),_=Ws.dot(sh);if(_>=0&&f<=_)return e.copy(r);let v=f*l-c*_;if(v<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(i).addScaledVector(Ws,a);let g=p*_-f*d;if(g<=0&&d-p>=0&&f-_>=0)return Ad.subVectors(r,s),a=(d-p)/(d-p+(f-_)),e.copy(s).addScaledVector(Ad,a);let x=1/(g+v+m);return o=v*x,a=m*x,e.copy(i).addScaledVector(Gs,o).addScaledVector(Ws,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},as=class{constructor(t=new K(1/0,1/0,1/0),e=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,oi):oi.fromBufferAttribute(r,o),oi.applyMatrix4(t.matrixWorld),this.expandByPoint(oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ea.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ea.copy(i.boundingBox)),ea.applyMatrix4(t.matrixWorld),this.union(ea)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,oi),oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fr),na.subVectors(this.max,Fr),Xs.subVectors(t.a,Fr),qs.subVectors(t.b,Fr),Ys.subVectors(t.c,Fr),ns.subVectors(qs,Xs),is.subVectors(Ys,qs),Ss.subVectors(Xs,Ys);let e=[0,-ns.z,ns.y,0,-is.z,is.y,0,-Ss.z,Ss.y,ns.z,0,-ns.x,is.z,0,-is.x,Ss.z,0,-Ss.x,-ns.y,ns.x,0,-is.y,is.x,0,-Ss.y,Ss.x,0];return!lh(e,Xs,qs,Ys,na)||(e=[1,0,0,0,1,0,0,0,1],!lh(e,Xs,qs,Ys,na))?!1:(ia.crossVectors(ns,is),e=[ia.x,ia.y,ia.z],lh(e,Xs,qs,Ys,na))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ki=[new K,new K,new K,new K,new K,new K,new K,new K],oi=new K,ea=new as,Xs=new K,qs=new K,Ys=new K,ns=new K,is=new K,Ss=new K,Fr=new K,na=new K,ia=new K,ws=new K;function lh(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ws.fromArray(n,r);let a=s.x*Math.abs(ws.x)+s.y*Math.abs(ws.y)+s.z*Math.abs(ws.z),c=t.dot(ws),l=e.dot(ws),p=i.dot(ws);if(Math.max(-Math.max(c,l,p),Math.min(c,l,p))>a)return!1}return!0}var nn=new K,sa=new _e,zg=0,Je=class extends Ai{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=$h,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)sa.fromBufferAttribute(this,e),sa.applyMatrix3(t),this.setXY(e,sa.x,sa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix3(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Mi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ze(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var jr=class extends Je{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Qr=class extends Je{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Tn=class extends Je{constructor(t,e,i){super(new Float32Array(t),e,i)}},kg=new as,Or=new K,ch=new K,ls=class{constructor(t=new K,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):kg.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Or.subVectors(t,this.center);let e=Or.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Or,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ch.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Or.copy(t.center).add(ch)),this.expandByPoint(Or.copy(t.center).sub(ch))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Vg=0,$n=new qe,hh=new Cn,$s=new K,On=new as,Br=new as,hn=new K,on=class n extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Eg(t)?Qr:jr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new fe().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return $n.makeRotationFromQuaternion(t),this.applyMatrix4($n),this}rotateX(t){return $n.makeRotationX(t),this.applyMatrix4($n),this}rotateY(t){return $n.makeRotationY(t),this.applyMatrix4($n),this}rotateZ(t){return $n.makeRotationZ(t),this.applyMatrix4($n),this}translate(t,e,i){return $n.makeTranslation(t,e,i),this.applyMatrix4($n),this}scale(t,e,i){return $n.makeScale(t,e,i),this.applyMatrix4($n),this}lookAt(t){return hh.lookAt(t),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tn(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];On.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){let i=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Br.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(On.min,Br.min),On.expandByPoint(hn),hn.addVectors(On.max,Br.max),On.expandByPoint(hn)):(On.expandByPoint(Br.min),On.expandByPoint(Br.max))}On.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)hn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(hn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,p=a.count;l<p;l++)hn.fromBufferAttribute(a,l),c&&($s.fromBufferAttribute(t,l),hn.add($s)),s=Math.max(s,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Je(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let b=0;b<i.count;b++)a[b]=new K,c[b]=new K;let l=new K,p=new K,d=new K,m=new _e,f=new _e,_=new _e,v=new K,g=new K;function x(b,A,U){l.fromBufferAttribute(i,b),p.fromBufferAttribute(i,A),d.fromBufferAttribute(i,U),m.fromBufferAttribute(r,b),f.fromBufferAttribute(r,A),_.fromBufferAttribute(r,U),p.sub(l),d.sub(l),f.sub(m),_.sub(m);let B=1/(f.x*_.y-_.x*f.y);isFinite(B)&&(v.copy(p).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(B),g.copy(d).multiplyScalar(f.x).addScaledVector(p,-_.x).multiplyScalar(B),a[b].add(v),a[A].add(v),a[U].add(v),c[b].add(g),c[A].add(g),c[U].add(g))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let b=0,A=C.length;b<A;++b){let U=C[b],B=U.start,Z=U.count;for(let z=B,O=B+Z;z<O;z+=3)x(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let L=new K,T=new K,S=new K,R=new K;function N(b){S.fromBufferAttribute(s,b),R.copy(S);let A=a[b];L.copy(A),L.sub(S.multiplyScalar(S.dot(A))).normalize(),T.crossVectors(R,A);let B=T.dot(c[b])<0?-1:1;o.setXYZW(b,L.x,L.y,L.z,B)}for(let b=0,A=C.length;b<A;++b){let U=C[b],B=U.start,Z=U.count;for(let z=B,O=B+Z;z<O;z+=3)N(t.getX(z+0)),N(t.getX(z+1)),N(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let m=0,f=i.count;m<f;m++)i.setXYZ(m,0,0,0);let s=new K,r=new K,o=new K,a=new K,c=new K,l=new K,p=new K,d=new K;if(t)for(let m=0,f=t.count;m<f;m+=3){let _=t.getX(m+0),v=t.getX(m+1),g=t.getX(m+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),p.subVectors(o,r),d.subVectors(s,r),p.cross(d),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),a.add(p),c.add(p),l.add(p),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let m=0,f=e.count;m<f;m+=3)s.fromBufferAttribute(e,m+0),r.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),p.subVectors(o,r),d.subVectors(s,r),p.cross(d),i.setXYZ(m+0,p.x,p.y,p.z),i.setXYZ(m+1,p.x,p.y,p.z),i.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(a,c){let l=a.array,p=a.itemSize,d=a.normalized,m=new l.constructor(c.length*p),f=0,_=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*p;for(let x=0;x<p;x++)m[_++]=l[f++]}return new Je(m,p,d)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let p=0,d=l.length;p<d;p++){let m=l[p],f=t(m,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],p=[];for(let d=0,m=l.length;d<m;d++){let f=l[d];p.push(f.toJSON(t.data))}p.length>0&&(s[c]=p,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let p=s[l];this.setAttribute(l,p.clone(e))}let r=t.morphAttributes;for(let l in r){let p=[],d=r[l];for(let m=0,f=d.length;m<f;m++)p.push(d[m].clone(e));this.morphAttributes[l]=p}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,p=o.length;l<p;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=$h,this.updateRanges=[],this.version=0,this.uuid=rs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},En=new K,to=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)En.fromBufferAttribute(this,e),En.applyMatrix4(t),this.setXYZ(e,En.x,En.y,En.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)En.fromBufferAttribute(this,e),En.applyNormalMatrix(t),this.setXYZ(e,En.x,En.y,En.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)En.fromBufferAttribute(this,e),En.transformDirection(t),this.setXYZ(e,En.x,En.y,En.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Mi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ze(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Mi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Mi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Mi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Mi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),s=ze(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){$r("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){$r("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},uh=new K,Hg=new K,Gg=new fe,ai=class{constructor(t=new K(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=uh.subVectors(i,e).cross(Hg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(uh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Gg.getNormalMatrix(t),s=this.coplanarPoint(uh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Wg=0,Ti=class extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=hr,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rh,this.blendDst=Ih,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ca,this.stencilZFail=Ca,this.stencilZPass=Ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){ae(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ae(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ce().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ai().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new _e().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _e().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},cs=class extends Ti{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zs,zr=new K,Js=new K,Ks=new K,js=new _e,kr=new _e,Ap=new qe,ra=new K,Vr=new K,oa=new K,Ed=new _e,fh=new _e,Td=new _e,Cs=class extends Cn{constructor(t=new cs){if(super(),this.isSprite=!0,this.type="Sprite",Zs===void 0){Zs=new on;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Wa(e,5);Zs.setIndex([0,1,2,0,2,3]),Zs.setAttribute("position",new to(i,3,0,!1)),Zs.setAttribute("uv",new to(i,2,3,!1))}this.geometry=Zs,this.material=t,this.center=new _e(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&le('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Js.setFromMatrixScale(this.matrixWorld),Ap.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ks.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Js.multiplyScalar(-Ks.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;aa(ra.set(-.5,-.5,0),Ks,o,Js,s,r),aa(Vr.set(.5,-.5,0),Ks,o,Js,s,r),aa(oa.set(.5,.5,0),Ks,o,Js,s,r),Ed.set(0,0),fh.set(1,0),Td.set(1,1);let a=t.ray.intersectTriangle(ra,Vr,oa,!1,zr);if(a===null&&(aa(Vr.set(-.5,.5,0),Ks,o,Js,s,r),fh.set(0,1),a=t.ray.intersectTriangle(ra,oa,Vr,!1,zr),a===null))return;let c=t.ray.origin.distanceTo(zr);c<t.near||c>t.far||e.push({distance:c,point:zr.clone(),uv:bi.getInterpolation(zr,ra,Vr,oa,Ed,fh,Td,new _e),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function aa(n,t,e,i,s,r){js.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(kr.x=r*js.x-s*js.y,kr.y=s*js.x+r*js.y):kr.copy(js),n.copy(t),n.x+=kr.x,n.y+=kr.y,n.applyMatrix4(Ap)}var Vi=new K,dh=new K,la=new K,ca=new K,ar=class{constructor(t=new K,e=new K(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vi.copy(this.origin).addScaledVector(this.direction,e),Vi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){dh.copy(t).add(e).multiplyScalar(.5),la.copy(e).sub(t).normalize(),ca.copy(this.origin).sub(dh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(la),a=ca.dot(this.direction),c=-ca.dot(la),l=ca.lengthSq(),p=Math.abs(1-o*o),d,m,f,_;if(p>0)if(d=o*c-a,m=o*a-c,_=r*p,d>=0)if(m>=-_)if(m<=_){let v=1/p;d*=v,m*=v,f=d*(d+o*m+2*a)+m*(o*d+m+2*c)+l}else m=r,d=Math.max(0,-(o*m+a)),f=-d*d+m*(m+2*c)+l;else m=-r,d=Math.max(0,-(o*m+a)),f=-d*d+m*(m+2*c)+l;else m<=-_?(d=Math.max(0,-(-o*r+a)),m=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+m*(m+2*c)+l):m<=_?(d=0,m=Math.min(Math.max(-r,-c),r),f=m*(m+2*c)+l):(d=Math.max(0,-(o*r+a)),m=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+m*(m+2*c)+l);else m=o>0?-r:r,d=Math.max(0,-(o*m+a)),f=-d*d+m*(m+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(dh).addScaledVector(la,m),f}intersectSphere(t,e){if(t.radius<0)return null;Vi.subVectors(t.center,this.origin);let i=Vi.dot(this.direction),s=Vi.dot(Vi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c,l=1/this.direction.x,p=1/this.direction.y,d=1/this.direction.z,m=this.origin;return l>=0?(i=(t.min.x-m.x)*l,s=(t.max.x-m.x)*l):(i=(t.max.x-m.x)*l,s=(t.min.x-m.x)*l),p>=0?(r=(t.min.y-m.y)*p,o=(t.max.y-m.y)*p):(r=(t.max.y-m.y)*p,o=(t.min.y-m.y)*p),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-m.z)*d,c=(t.max.z-m.z)*d):(a=(t.max.z-m.z)*d,c=(t.min.z-m.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Vi)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,p=a.z,d=t.x-o.x,m=t.y-o.y,f=t.z-o.z,_=e.x-o.x,v=e.y-o.y,g=e.z-o.z,x=i.x-o.x,C=i.y-o.y,L=i.z-o.z,T=Math.abs(c),S=Math.abs(l),R=Math.abs(p),N,b,A,U,B,Z,z,O,k,j,$,it;if(T>=S&&T>=R?(A=c,Z=d,k=_,it=x,c>=0?(N=l,b=p,U=m,B=f,z=v,O=g,j=C,$=L):(N=p,b=l,U=f,B=m,z=g,O=v,j=L,$=C)):S>=R?(A=l,Z=m,k=v,it=C,l>=0?(N=p,b=c,U=f,B=d,z=g,O=_,j=L,$=x):(N=c,b=p,U=d,B=f,z=_,O=g,j=x,$=L)):(A=p,Z=f,k=g,it=L,p>=0?(N=c,b=l,U=d,B=m,z=_,O=v,j=x,$=C):(N=l,b=c,U=m,B=d,z=v,O=_,j=C,$=x)),A===0)return null;let J=N/A,nt=b/A,ot=1/A,Rt=U-J*Z,gt=B-nt*Z,St=z-J*k,Tt=O-nt*k,_t=j-J*it,X=$-nt*it,et=_t*Tt-X*St,ut=Rt*X-gt*_t,zt=St*gt-Tt*Rt;if(s){if(et<0||ut<0||zt<0)return null}else if((et<0||ut<0||zt<0)&&(et>0||ut>0||zt>0))return null;let mt=et+ut+zt;if(mt===0)return null;let Vt=ot*(et*Z+ut*k+zt*it);return(mt>0?Vt<0:Vt>0)?null:this.at(Vt/mt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vn=class extends Ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.combine=Ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Cd=new qe,As=new ar,ha=new ls,Rd=new K,ua=new K,fa=new K,da=new K,ph=new K,pa=new K,Id=new K,ma=new K,Fe=class extends Cn{constructor(t=new on,e=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){pa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let p=a[c],d=r[c];p!==0&&(ph.fromBufferAttribute(d,t),o?pa.addScaledVector(ph,p):pa.addScaledVector(ph.sub(e),p))}e.add(pa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ha.copy(i.boundingSphere),ha.applyMatrix4(r),As.copy(t.ray).recast(t.near),!(ha.containsPoint(As.origin)===!1&&(As.intersectSphere(ha,Rd)===null||As.origin.distanceToSquared(Rd)>(t.far-t.near)**2))&&(Cd.copy(r).invert(),As.copy(t.ray).applyMatrix4(Cd),!(i.boundingBox!==null&&As.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,As)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,p=r.attributes.uv1,d=r.attributes.normal,m=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=m.length;_<v;_++){let g=m[_],x=o[g.materialIndex],C=Math.max(g.start,f.start),L=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let T=C,S=L;T<S;T+=3){let R=a.getX(T),N=a.getX(T+1),b=a.getX(T+2);s=ga(this,x,t,i,l,p,d,R,N,b),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let _=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=_,x=v;g<x;g+=3){let C=a.getX(g),L=a.getX(g+1),T=a.getX(g+2);s=ga(this,o,t,i,l,p,d,C,L,T),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,v=m.length;_<v;_++){let g=m[_],x=o[g.materialIndex],C=Math.max(g.start,f.start),L=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let T=C,S=L;T<S;T+=3){let R=T,N=T+1,b=T+2;s=ga(this,x,t,i,l,p,d,R,N,b),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let _=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let g=_,x=v;g<x;g+=3){let C=g,L=g+1,T=g+2;s=ga(this,o,t,i,l,p,d,C,L,T),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Xg(n,t,e,i,s,r,o,a){let c;if(t.side===Rn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===ps,a),c===null)return null;ma.copy(a),ma.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(ma);return l<e.near||l>e.far?null:{distance:l,point:ma.clone(),object:n}}function ga(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,ua),n.getVertexPosition(c,fa),n.getVertexPosition(l,da);let p=Xg(n,t,e,i,ua,fa,da,Id);if(p){let d=new K;bi.getBarycoord(Id,ua,fa,da,d),s&&(p.uv=bi.getInterpolatedAttribute(s,a,c,l,d,new _e)),r&&(p.uv1=bi.getInterpolatedAttribute(r,a,c,l,d,new _e)),o&&(p.normal=bi.getInterpolatedAttribute(o,a,c,l,d,new K),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));let m={a,b:c,c:l,normal:new K,materialIndex:0};bi.getNormal(ua,fa,da,m.normal),p.face=m,p.barycoord=d}return p}var Xa=class extends mn{constructor(t=null,e=1,i=1,s,r,o,a,c,l=un,p=un,d,m){super(null,o,a,c,l,p,s,r,d,m),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Es=new ls,qg=new _e(.5,.5),xa=new K,eo=class{constructor(t=new ai,e=new ai,i=new ai,s=new ai,r=new ai,o=new ai){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=li,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],p=r[4],d=r[5],m=r[6],f=r[7],_=r[8],v=r[9],g=r[10],x=r[11],C=r[12],L=r[13],T=r[14],S=r[15];if(s[0].setComponents(l-o,f-p,x-_,S-C).normalize(),s[1].setComponents(l+o,f+p,x+_,S+C).normalize(),s[2].setComponents(l+a,f+d,x+v,S+L).normalize(),s[3].setComponents(l-a,f-d,x-v,S-L).normalize(),i)s[4].setComponents(c,m,g,T).normalize(),s[5].setComponents(l-c,f-m,x-g,S-T).normalize();else if(s[4].setComponents(l-c,f-m,x-g,S-T).normalize(),e===li)s[5].setComponents(l+c,f+m,x+g,S+T).normalize();else if(e===qr)s[5].setComponents(c,m,g,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(t){Es.center.set(0,0,0);let e=qg.distanceTo(t.center);return Es.radius=.7071067811865476+e,Es.applyMatrix4(t.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(xa.x=s.normal.x>0?t.max.x:t.min.x,xa.y=s.normal.y>0?t.max.y:t.min.y,xa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Rs=class extends Ti{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},qa=new K,Ya=new K,Pd=new qe,Hr=new ar,_a=new ls,mh=new K,Ld=new K,$a=class extends Cn{constructor(t=new on,e=new Rs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)qa.fromBufferAttribute(e,s-1),Ya.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=qa.distanceTo(Ya);t.setAttribute("lineDistance",new Tn(i,1))}else ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_a.copy(i.boundingSphere),_a.applyMatrix4(s),_a.radius+=r,t.ray.intersectsSphere(_a)===!1)return;Pd.copy(s).invert(),Hr.copy(t.ray).applyMatrix4(Pd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,p=i.index,m=i.attributes.position;if(p!==null){let f=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let v=f,g=_-1;v<g;v+=l){let x=p.getX(v),C=p.getX(v+1),L=ya(this,t,Hr,c,x,C,v);L&&e.push(L)}if(this.isLineLoop){let v=p.getX(_-1),g=p.getX(f),x=ya(this,t,Hr,c,v,g,_-1);x&&e.push(x)}}else{let f=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let v=f,g=_-1;v<g;v+=l){let x=ya(this,t,Hr,c,v,v+1,v);x&&e.push(x)}if(this.isLineLoop){let v=ya(this,t,Hr,c,_-1,f,_-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ya(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(qa.fromBufferAttribute(a,s),Ya.fromBufferAttribute(a,r),e.distanceSqToSegment(qa,Ya,mh,Ld)>i)return;mh.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(mh);if(!(l<t.near||l>t.far))return{distance:l,point:Ld.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Dd=new K,Nd=new K,Is=class extends $a{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Dd.fromBufferAttribute(e,s),Nd.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Dd.distanceTo(Nd);t.setAttribute("lineDistance",new Tn(i,1))}else ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var lr=class extends Ti{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ud=new qe,bh=new ar,va=new ls,Ma=new K,no=class extends Cn{constructor(t=new on,e=new lr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),va.copy(i.boundingSphere),va.applyMatrix4(s),va.radius+=r,t.ray.intersectsSphere(va)===!1)return;Ud.copy(s).invert(),bh.copy(t.ray).applyMatrix4(Ud);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){let m=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let _=m,v=f;_<v;_++){let g=l.getX(_);Ma.fromBufferAttribute(d,g),Fd(Ma,g,c,s,t,e,this)}}else{let m=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let _=m,v=f;_<v;_++)Ma.fromBufferAttribute(d,_),Fd(Ma,_,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Fd(n,t,e,i,s,r,o){let a=bh.distanceSqToPoint(n);if(a<e){let c=new K;bh.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var io=class extends mn{constructor(t=[],e=ms,i,s,r,o,a,c,l,p){super(t,e,i,s,r,o,a,c,l,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Zn=class extends mn{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var hs=class extends mn{constructor(t,e,i=hi,s,r,o,a=un,c=un,l,p=wi,d=1){if(p!==wi&&p!==xs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:t,height:e,depth:d};super(m,s,r,o,a,c,p,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new rr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Za=class extends hs{constructor(t,e=hi,i=ms,s,r,o=un,a=un,c,l=wi){let p={width:t,height:t,depth:1},d=[p,p,p,p,p,p];super(t,t,e,i,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},so=class extends mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},tn=class n extends on{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],p=[],d=[],m=0,f=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Tn(l,3)),this.setAttribute("normal",new Tn(p,3)),this.setAttribute("uv",new Tn(d,2));function _(v,g,x,C,L,T,S,R,N,b,A){let U=T/N,B=S/b,Z=T/2,z=S/2,O=R/2,k=N+1,j=b+1,$=0,it=0,J=new K;for(let nt=0;nt<j;nt++){let ot=nt*B-z;for(let Rt=0;Rt<k;Rt++){let gt=Rt*U-Z;J[v]=gt*C,J[g]=ot*L,J[x]=O,l.push(J.x,J.y,J.z),J[v]=0,J[g]=0,J[x]=R>0?1:-1,p.push(J.x,J.y,J.z),d.push(Rt/N),d.push(1-nt/b),$+=1}}for(let nt=0;nt<b;nt++)for(let ot=0;ot<N;ot++){let Rt=m+ot+k*nt,gt=m+ot+k*(nt+1),St=m+(ot+1)+k*(nt+1),Tt=m+(ot+1)+k*nt;c.push(Rt,gt,Tt),c.push(gt,St,Tt),it+=6}a.addGroup(f,it,A),f+=it,m+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ba=new K,Sa=new K,gh=new K,wa=new bi,ro=class extends on{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(Ra*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],p=["a","b","c"],d=new Array(3),m={},f=[];for(let _=0;_<c;_+=3){o?(l[0]=o.getX(_),l[1]=o.getX(_+1),l[2]=o.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);let{a:v,b:g,c:x}=wa;if(v.fromBufferAttribute(a,l[0]),g.fromBufferAttribute(a,l[1]),x.fromBufferAttribute(a,l[2]),wa.getNormal(gh),d[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,d[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[2]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let C=0;C<3;C++){let L=(C+1)%3,T=d[C],S=d[L],R=wa[p[C]],N=wa[p[L]],b=`${T}_${S}`,A=`${S}_${T}`;A in m&&m[A]?(gh.dot(m[A].normal)<=r&&(f.push(R.x,R.y,R.z),f.push(N.x,N.y,N.z)),m[A]=null):b in m||(m[b]={index0:l[C],index1:l[L],normal:gh.clone()})}}for(let _ in m)if(m[_]){let{index0:v,index1:g}=m[_];ba.fromBufferAttribute(a,v),Sa.fromBufferAttribute(a,g),f.push(ba.x,ba.y,ba.z),f.push(Sa.x,Sa.y,Sa.z)}this.setAttribute("position",new Tn(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var oo=class n extends on{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,p=c+1,d=t/a,m=e/c,f=[],_=[],v=[],g=[];for(let x=0;x<p;x++){let C=x*m-o;for(let L=0;L<l;L++){let T=L*d-r;_.push(T,-C,0),v.push(0,0,1),g.push(L/a),g.push(1-x/c)}}for(let x=0;x<c;x++)for(let C=0;C<a;C++){let L=C+l*x,T=C+l*(x+1),S=C+1+l*(x+1),R=C+1+l*x;f.push(L,T,R),f.push(T,S,R)}this.setIndex(f),this.setAttribute("position",new Tn(_,3)),this.setAttribute("normal",new Tn(v,3)),this.setAttribute("uv",new Tn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function Ds(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Od(s))s.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Od(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function bn(n){let t={};for(let e=0;e<n.length;e++){let i=Ds(n[e]);for(let s in i)t[s]=i[s]}return t}function Od(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Yg(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Jh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Me.workingColorSpace}var Ep={clone:Ds,merge:bn},$g=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends Ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$g,this.fragmentShader=Zg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=Yg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new ce().setHex(s.value);break;case"v2":this.uniforms[i].value=new _e().fromArray(s.value);break;case"v3":this.uniforms[i].value=new K().fromArray(s.value);break;case"v4":this.uniforms[i].value=new $e().fromArray(s.value);break;case"m3":this.uniforms[i].value=new fe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new qe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ja=class extends Mn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ka=class extends Ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=up,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ja=class extends Ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Qs(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function xh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var us=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Qa=class extends us{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yh,endingEnd:yh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case vh:r=t,a=2*e-i;break;case Mh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case vh:o=t,c=2*i-e;break;case Mh:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let l=(i-e)*.5,p=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=r*p,this._offsetNext=o*p}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,p=this._offsetPrev,d=this._offsetNext,m=this._weightPrev,f=this._weightNext,_=(i-e)/(s-e),v=_*_,g=v*_,x=-m*g+2*m*v-m*_,C=(1+m)*g+(-1.5-2*m)*v+(-.5+m)*_+1,L=(-1-f)*g+(1.5+f)*v+.5*_,T=f*g-f*v;for(let S=0;S!==a;++S)r[S]=x*o[p+S]+C*o[l+S]+L*o[c+S]+T*o[d+S];return r}},tl=class extends us{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,p=(i-e)/(s-e),d=1-p;for(let m=0;m!==a;++m)r[m]=o[l+m]*d+o[c+m]*p;return r}},el=class extends us{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},nl=class extends us{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,p=this.inTangents,d=this.outTangents;if(!p||!d){let _=(i-e)/(s-e),v=1-_;for(let g=0;g!==a;++g)r[g]=o[l+g]*v+o[c+g]*_;return r}let m=a*2,f=t-1;for(let _=0;_!==a;++_){let v=o[l+_],g=o[c+_],x=f*m+_*2,C=d[x],L=d[x+1],T=t*m+_*2,S=p[T],R=p[T+1],N=Kg(i,e,C,S,s);r[_]=Tp(N,v,L,R,g)}return r}};function Tp(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Jg(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Kg(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=Tp(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let c=Jg(r,t,e,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Bn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qs(e,this.TimeBufferType),this.values=Qs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Qs(t.times,Array),values:Qs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),xh(t.settings)&&(i.settings={inTangents:Qs(t.settings.inTangents,Array),outTangents:Qs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new el(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new nl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Gr:e=this.InterpolantFactoryMethodDiscrete;break;case za:e=this.InterpolantFactoryMethodLinear;break;case Ta:e=this.InterpolantFactoryMethodSmooth;break;case _h:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ae("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gr;case this.InterpolantFactoryMethodLinear:return za;case this.InterpolantFactoryMethodSmooth:return Ta;case this.InterpolantFactoryMethodBezier:return _h}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;xh(this.settings)&&(Bd(this.settings.inTangents,t),Bd(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(le("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(le("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){le("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){le("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Tg(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){le("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ta,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],p=t[a+1];if(l!==p&&(a!==1||l!==t[0]))if(s)c=!0;else{let d=a*i,m=d-i,f=d+i;for(let _=0;_!==i;++_){let v=e[d+_];if(v!==e[m+_]||v!==e[f+_]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*i,m=o*i;for(let f=0;f!==i;++f)e[m+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,xh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Bd(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=za;var fs=class extends Bn{constructor(t,e,i){super(t,e,i)}};fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Gr;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var il=class extends Bn{constructor(t,e,i,s){super(t,e,i,s)}};il.prototype.ValueTypeName="color";var sl=class extends Bn{constructor(t,e,i,s){super(t,e,i,s)}};sl.prototype.ValueTypeName="number";var rl=class extends us{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),l=t*a;for(let p=l+a;l!==p;l+=4)Ei.slerpFlat(r,0,o,l-a,o,l,c);return r}},ao=class extends Bn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new rl(this.times,this.values,this.getValueSize(),t)}};ao.prototype.ValueTypeName="quaternion";ao.prototype.InterpolantFactoryMethodSmooth=void 0;var ds=class extends Bn{constructor(t,e,i){super(t,e,i)}};ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Gr;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var ol=class extends Bn{constructor(t,e,i,s){super(t,e,i,s)}};ol.prototype.ValueTypeName="vector";var al=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(p){a++,r===!1&&s.onStart!==void 0&&s.onStart(p,o,a),r=!0},this.itemEnd=function(p){o++,s.onProgress!==void 0&&s.onProgress(p,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return p=p.normalize("NFC"),c?c(p):p},this.setURLModifier=function(p){return c=p,this},this.addHandler=function(p,d){return l.push(p,d),this},this.removeHandler=function(p){let d=l.indexOf(p);return d!==-1&&l.splice(d,2),this},this.getHandler=function(p){for(let d=0,m=l.length;d<m;d+=2){let f=l[d],_=l[d+1];if(f.global&&(f.lastIndex=0),f.test(p))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Cp=new al,ll=class{constructor(t){this.manager=t!==void 0?t:Cp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ll.DEFAULT_MATERIAL_NAME="__DEFAULT";var Aa=new K,Ea=new Ei,vi=new K,lo=class extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Aa,Ea,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Aa,Ea,vi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Aa,Ea,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Aa,Ea,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ss=new K,zd=new _e,kd=new _e,yn=class extends lo{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ka*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ra*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ka*2*Math.atan(Math.tan(Ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ss.x,ss.y).multiplyScalar(-t/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ss.x,ss.y).multiplyScalar(-t/ss.z)}getViewSize(t,e){return this.getViewBounds(t,zd,kd),e.subVectors(kd,zd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ra*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var co=class extends lo{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=p*this.view.offsetY,c=a-p*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var tr=-90,er=1,cl=class extends Cn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new yn(tr,er,t,e);s.layers=this.layers,this.add(s);let r=new yn(tr,er,t,e);r.layers=this.layers,this.add(r);let o=new yn(tr,er,t,e);o.layers=this.layers,this.add(o);let a=new yn(tr,er,t,e);a.layers=this.layers,this.add(a);let c=new yn(tr,er,t,e);c.layers=this.layers,this.add(c);let l=new yn(tr,er,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===li)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===qr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,p]=this.children,d=t.getRenderTarget(),m=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,p),t.setRenderTarget(d,m,f),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},hl=class extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Kh="\\[\\]\\.:\\/",jg=new RegExp("["+Kh+"]","g"),jh="[^"+Kh+"]",Qg="[^"+Kh.replace("\\.","")+"]",tx=/((?:WC+[\/:])*)/.source.replace("WC",jh),ex=/(WCOD+)?/.source.replace("WCOD",Qg),nx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jh),ix=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jh),sx=new RegExp("^"+tx+ex+nx+ix+"$"),rx=["material","materials","bones","map"],Sh=class{constructor(t,e,i){let s=i||We.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},We=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(jg,"")}static parseTrackName(t){let e=sx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);rx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let p=0;p<t.length;p++)if(t[p].name===l){l=p;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;le("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};We.Composite=Sh;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Zb=new Float32Array(1);var su=class su{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};su.prototype.isMatrix2=!0;var wh=su;function Qh(n,t,e,i){let s=ox(i);switch(e){case Wh:return n*t;case qh:return n*t/s.components*s.byteLength;case _l:return n*t/s.components*s.byteLength;case _s:return n*t*2/s.components*s.byteLength;case yl:return n*t*2/s.components*s.byteLength;case Xh:return n*t*3/s.components*s.byteLength;case Kn:return n*t*4/s.components*s.byteLength;case vl:return n*t*4/s.components*s.byteLength;case po:case mo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case go:case xo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case bl:case wl:return Math.max(n,16)*Math.max(t,8)/4;case Ml:case Sl:return Math.max(n,8)*Math.max(t,8)/2;case Al:case El:case Cl:case Rl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Tl:case _o:case Il:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Pl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case zl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case kl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Gl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Wl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Xl:case ql:case Yl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case $l:case Zl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case yo:case Jl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ox(n){switch(n){case zn:case kh:return{byteLength:1,components:1};case ur:case Vh:case fi:return{byteLength:2,components:1};case gl:case xl:return{byteLength:2,components:4};case hi:case ml:case ui:return{byteLength:4,components:1};case Hh:case Gh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Jp(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function lx(n){let t=new WeakMap;function e(a,c){let l=a.array,p=a.usage,d=l.byteLength,m=n.createBuffer();n.bindBuffer(c,m),n.bufferData(c,l,p),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:m,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let p=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,p);else{d.sort((f,_)=>f.start-_.start);let m=0;for(let f=1;f<d.length;f++){let _=d[m],v=d[f];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++m,d[m]=v)}d.length=m+1;for(let f=0,_=d.length;f<_;f++){let v=d[f];n.bufferSubData(l,v.start*p.BYTES_PER_ELEMENT,p,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let p=t.get(a);(!p||p.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var cx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ux=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,px=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_x=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ix=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Px=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Lx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Dx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ux=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ox=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zx="gl_FragColor = linearToOutputTexel( gl_FragColor );",kx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Hx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$x=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,e_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,n_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,a_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,l_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,c_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,h_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u_=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,f_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,g_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,__=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,y_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,w_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,E_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,C_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,R_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,L_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,D_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,U_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,F_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,z_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,W_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,q_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Y_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Z_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,K_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Q_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ty=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ey=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ny=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ly=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,py=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,my=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_y=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,My=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,by=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ay=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ey=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ty=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ry=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Iy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Py=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ly=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ny=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,By=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ky=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ge={alphahash_fragment:cx,alphahash_pars_fragment:hx,alphamap_fragment:ux,alphamap_pars_fragment:fx,alphatest_fragment:dx,alphatest_pars_fragment:px,aomap_fragment:mx,aomap_pars_fragment:gx,batching_pars_vertex:xx,batching_vertex:_x,begin_vertex:yx,beginnormal_vertex:vx,bsdfs:Mx,iridescence_fragment:bx,bumpmap_pars_fragment:Sx,clipping_planes_fragment:wx,clipping_planes_pars_fragment:Ax,clipping_planes_pars_vertex:Ex,clipping_planes_vertex:Tx,color_fragment:Cx,color_pars_fragment:Rx,color_pars_vertex:Ix,color_vertex:Px,common:Lx,cube_uv_reflection_fragment:Dx,defaultnormal_vertex:Nx,displacementmap_pars_vertex:Ux,displacementmap_vertex:Fx,emissivemap_fragment:Ox,emissivemap_pars_fragment:Bx,colorspace_fragment:zx,colorspace_pars_fragment:kx,envmap_fragment:Vx,envmap_common_pars_fragment:Hx,envmap_pars_fragment:Gx,envmap_pars_vertex:Wx,envmap_physical_pars_fragment:e_,envmap_vertex:Xx,fog_vertex:qx,fog_pars_vertex:Yx,fog_fragment:$x,fog_pars_fragment:Zx,gradientmap_pars_fragment:Jx,lightmap_pars_fragment:Kx,lights_lambert_fragment:jx,lights_lambert_pars_fragment:Qx,lights_pars_begin:t_,lights_toon_fragment:n_,lights_toon_pars_fragment:i_,lights_phong_fragment:s_,lights_phong_pars_fragment:r_,lights_physical_fragment:o_,lights_physical_pars_fragment:a_,lights_fragment_begin:l_,lights_fragment_maps:c_,lights_fragment_end:h_,lightprobes_pars_fragment:u_,logdepthbuf_fragment:f_,logdepthbuf_pars_fragment:d_,logdepthbuf_pars_vertex:p_,logdepthbuf_vertex:m_,map_fragment:g_,map_pars_fragment:x_,map_particle_fragment:__,map_particle_pars_fragment:y_,metalnessmap_fragment:v_,metalnessmap_pars_fragment:M_,morphinstance_vertex:b_,morphcolor_vertex:S_,morphnormal_vertex:w_,morphtarget_pars_vertex:A_,morphtarget_vertex:E_,normal_fragment_begin:T_,normal_fragment_maps:C_,normal_pars_fragment:R_,normal_pars_vertex:I_,normal_vertex:P_,normalmap_pars_fragment:L_,clearcoat_normal_fragment_begin:D_,clearcoat_normal_fragment_maps:N_,clearcoat_pars_fragment:U_,iridescence_pars_fragment:F_,opaque_fragment:O_,packing:B_,premultiplied_alpha_fragment:z_,project_vertex:k_,dithering_fragment:V_,dithering_pars_fragment:H_,roughnessmap_fragment:G_,roughnessmap_pars_fragment:W_,shadowmap_pars_fragment:X_,shadowmap_pars_vertex:q_,shadowmap_vertex:Y_,shadowmask_pars_fragment:$_,skinbase_vertex:Z_,skinning_pars_vertex:J_,skinning_vertex:K_,skinnormal_vertex:j_,specularmap_fragment:Q_,specularmap_pars_fragment:ty,tonemapping_fragment:ey,tonemapping_pars_fragment:ny,transmission_fragment:iy,transmission_pars_fragment:sy,uv_pars_fragment:ry,uv_pars_vertex:oy,uv_vertex:ay,worldpos_vertex:ly,background_vert:cy,background_frag:hy,backgroundCube_vert:uy,backgroundCube_frag:fy,cube_vert:dy,cube_frag:py,depth_vert:my,depth_frag:gy,distance_vert:xy,distance_frag:_y,equirect_vert:yy,equirect_frag:vy,linedashed_vert:My,linedashed_frag:by,meshbasic_vert:Sy,meshbasic_frag:wy,meshlambert_vert:Ay,meshlambert_frag:Ey,meshmatcap_vert:Ty,meshmatcap_frag:Cy,meshnormal_vert:Ry,meshnormal_frag:Iy,meshphong_vert:Py,meshphong_frag:Ly,meshphysical_vert:Dy,meshphysical_frag:Ny,meshtoon_vert:Uy,meshtoon_frag:Fy,points_vert:Oy,points_frag:By,shadow_vert:zy,shadow_frag:ky,sprite_vert:Vy,sprite_frag:Hy},Ot={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Ii={basic:{uniforms:bn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:bn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new ce(0)},envMapIntensity:{value:1}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:bn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:bn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:bn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new ce(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:bn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:bn([Ot.points,Ot.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:bn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:bn([Ot.common,Ot.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:bn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:bn([Ot.sprite,Ot.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distance:{uniforms:bn([Ot.common,Ot.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distance_vert,fragmentShader:ge.distance_frag},shadow:{uniforms:bn([Ot.lights,Ot.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Ii.physical={uniforms:bn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};var Ql={r:0,b:0,g:0},Gy=new qe,Kp=new fe;Kp.set(-1,0,0,0,1,0,0,0,1);function Wy(n,t,e,i,s,r){let o=new ce(0),a=s===!0?0:1,c,l,p=null,d=0,m=null;function f(C){let L=C.isScene===!0?C.background:null;if(L&&L.isTexture){let T=C.backgroundBlurriness>0;L=t.get(L,T)}return L}function _(C){let L=!1,T=f(C);T===null?g(o,a):T&&T.isColor&&(g(T,1),L=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||L)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(C,L){let T=f(L);T&&(T.isCubeTexture||T.mapping===uo)?(l===void 0&&(l=new Fe(new tn(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Ds(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=T,l.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Gy.makeRotationFromEuler(L.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Kp),l.material.toneMapped=Me.getTransfer(T.colorSpace)!==Ue,(p!==T||d!==T.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,p=T,d=T.version,m=n.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Fe(new oo(2,2),new Mn({name:"BackgroundMaterial",uniforms:Ds(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.toneMapped=Me.getTransfer(T.colorSpace)!==Ue,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||d!==T.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,p=T,d=T.version,m=n.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function g(C,L){C.getRGB(Ql,Jh(n)),e.buffers.color.setClear(Ql.r,Ql.g,Ql.b,L,r)}function x(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(C,L=1){o.set(C),a=L,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(C){a=C,g(o,a)},render:_,addToRenderList:v,dispose:x}}function Xy(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=m(null),r=s,o=!1;function a(B,Z,z,O,k){let j=!1,$=d(B,O,z,Z);r!==$&&(r=$,l(r.object)),j=f(B,O,z,k),j&&_(B,O,z,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,T(B,Z,z,O),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return n.createVertexArray()}function l(B){return n.bindVertexArray(B)}function p(B){return n.deleteVertexArray(B)}function d(B,Z,z,O){let k=O.wireframe===!0,j=i[Z.id];j===void 0&&(j={},i[Z.id]=j);let $=B.isInstancedMesh===!0?B.id:0,it=j[$];it===void 0&&(it={},j[$]=it);let J=it[z.id];J===void 0&&(J={},it[z.id]=J);let nt=J[k];return nt===void 0&&(nt=m(c()),J[k]=nt),nt}function m(B){let Z=[],z=[],O=[];for(let k=0;k<e;k++)Z[k]=0,z[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:z,attributeDivisors:O,object:B,attributes:{},index:null}}function f(B,Z,z,O){let k=r.attributes,j=Z.attributes,$=0,it=z.getAttributes();for(let J in it)if(it[J].location>=0){let ot=k[J],Rt=j[J];if(Rt===void 0&&(J==="instanceMatrix"&&B.instanceMatrix&&(Rt=B.instanceMatrix),J==="instanceColor"&&B.instanceColor&&(Rt=B.instanceColor)),ot===void 0||ot.attribute!==Rt||Rt&&ot.data!==Rt.data)return!0;$++}return r.attributesNum!==$||r.index!==O}function _(B,Z,z,O){let k={},j=Z.attributes,$=0,it=z.getAttributes();for(let J in it)if(it[J].location>=0){let ot=j[J];ot===void 0&&(J==="instanceMatrix"&&B.instanceMatrix&&(ot=B.instanceMatrix),J==="instanceColor"&&B.instanceColor&&(ot=B.instanceColor));let Rt={};Rt.attribute=ot,ot&&ot.data&&(Rt.data=ot.data),k[J]=Rt,$++}r.attributes=k,r.attributesNum=$,r.index=O}function v(){let B=r.newAttributes;for(let Z=0,z=B.length;Z<z;Z++)B[Z]=0}function g(B){x(B,0)}function x(B,Z){let z=r.newAttributes,O=r.enabledAttributes,k=r.attributeDivisors;z[B]=1,O[B]===0&&(n.enableVertexAttribArray(B),O[B]=1),k[B]!==Z&&(n.vertexAttribDivisor(B,Z),k[B]=Z)}function C(){let B=r.newAttributes,Z=r.enabledAttributes;for(let z=0,O=Z.length;z<O;z++)Z[z]!==B[z]&&(n.disableVertexAttribArray(z),Z[z]=0)}function L(B,Z,z,O,k,j,$){$===!0?n.vertexAttribIPointer(B,Z,z,k,j):n.vertexAttribPointer(B,Z,z,O,k,j)}function T(B,Z,z,O){v();let k=O.attributes,j=z.getAttributes(),$=Z.defaultAttributeValues;for(let it in j){let J=j[it];if(J.location>=0){let nt=k[it];if(nt===void 0&&(it==="instanceMatrix"&&B.instanceMatrix&&(nt=B.instanceMatrix),it==="instanceColor"&&B.instanceColor&&(nt=B.instanceColor)),nt!==void 0){let ot=nt.normalized,Rt=nt.itemSize,gt=t.get(nt);if(gt===void 0)continue;let St=gt.buffer,Tt=gt.type,_t=gt.bytesPerElement,X=Tt===n.INT||Tt===n.UNSIGNED_INT||nt.gpuType===ml;if(nt.isInterleavedBufferAttribute){let et=nt.data,ut=et.stride,zt=nt.offset;if(et.isInstancedInterleavedBuffer){for(let mt=0;mt<J.locationSize;mt++)x(J.location+mt,et.meshPerAttribute);B.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let mt=0;mt<J.locationSize;mt++)g(J.location+mt);n.bindBuffer(n.ARRAY_BUFFER,St);for(let mt=0;mt<J.locationSize;mt++)L(J.location+mt,Rt/J.locationSize,Tt,ot,ut*_t,(zt+Rt/J.locationSize*mt)*_t,X)}else{if(nt.isInstancedBufferAttribute){for(let et=0;et<J.locationSize;et++)x(J.location+et,nt.meshPerAttribute);B.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let et=0;et<J.locationSize;et++)g(J.location+et);n.bindBuffer(n.ARRAY_BUFFER,St);for(let et=0;et<J.locationSize;et++)L(J.location+et,Rt/J.locationSize,Tt,ot,Rt*_t,Rt/J.locationSize*et*_t,X)}}else if($!==void 0){let ot=$[it];if(ot!==void 0)switch(ot.length){case 2:n.vertexAttrib2fv(J.location,ot);break;case 3:n.vertexAttrib3fv(J.location,ot);break;case 4:n.vertexAttrib4fv(J.location,ot);break;default:n.vertexAttrib1fv(J.location,ot)}}}}C()}function S(){A();for(let B in i){let Z=i[B];for(let z in Z){let O=Z[z];for(let k in O){let j=O[k];for(let $ in j)p(j[$].object),delete j[$];delete O[k]}}delete i[B]}}function R(B){if(i[B.id]===void 0)return;let Z=i[B.id];for(let z in Z){let O=Z[z];for(let k in O){let j=O[k];for(let $ in j)p(j[$].object),delete j[$];delete O[k]}}delete i[B.id]}function N(B){for(let Z in i){let z=i[Z];for(let O in z){let k=z[O];if(k[B.id]===void 0)continue;let j=k[B.id];for(let $ in j)p(j[$].object),delete j[$];delete k[B.id]}}}function b(B){for(let Z in i){let z=i[Z],O=B.isInstancedMesh===!0?B.id:0,k=z[O];if(k!==void 0){for(let j in k){let $=k[j];for(let it in $)p($[it].object),delete $[it];delete k[j]}delete z[O],Object.keys(z).length===0&&delete i[Z]}}}function A(){U(),o=!0,r!==s&&(r=s,l(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:U,dispose:S,releaseStatesOfGeometry:R,releaseStatesOfObject:b,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:g,disableUnusedAttributes:C}}function qy(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function o(c,l,p){p!==0&&(n.drawArraysInstanced(i,c,l,p),e.update(l,i,p))}function a(c,l,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,p);let m=0;for(let f=0;f<p;f++)m+=l[f];e.update(m,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Yy(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let N=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(N){return!(N!==Kn&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){let b=N===fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==zn&&N!==ui&&!b&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",p=c(l);p!==l&&(ae("WebGLRenderer:",l,"not supported, using",p,"instead."),l=p);let d=e.logarithmicDepthBuffer===!0,m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&m===!1&&ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),L=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:m,maxTextures:f,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:C,maxVaryings:L,maxFragmentUniforms:T,maxSamples:S,samples:R}}function $y(n){let t=this,e=null,i=0,s=!1,r=!1,o=new ai,a=new fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,m){let f=d.length!==0||m||i!==0||s;return s=m,i=d.length,f},this.beginShadows=function(){r=!0,p(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,m){e=p(d,m,0)},this.setState=function(d,m,f){let _=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,x=n.get(d);if(!s||_===null||_.length===0||r&&!g)r?p(null):l();else{let C=r?0:i,L=C*4,T=x.clippingState||null;c.value=T,T=p(_,m,L,f);for(let S=0;S!==L;++S)T[S]=e[S];x.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function p(d,m,f,_){let v=d!==null?d.length:0,g=null;if(v!==0){if(g=c.value,_!==!0||g===null){let x=f+v*4,C=m.matrixWorldInverse;a.getNormalMatrix(C),(g===null||g.length<x)&&(g=new Float32Array(x));for(let L=0,T=f;L!==v;++L,T+=4)o.copy(d[L]).applyMatrix4(C,a),o.normal.toArray(g,T),g[T+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}var pr=4,Zy=6,Jy=20,Ky=256,vo=new co,Rp=new ce,ru=null,ou=0,au=0,lu=!1,jy=new K,Ns=new K,ec=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=jy}=r;ru=this._renderer.getRenderTarget(),ou=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel(),lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ru,ou,au),this._renderer.xr.enabled=lu,t.scissorTest=!1,dr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ms||t.mapping===Ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ru=this._renderer.getRenderTarget(),ou=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel(),lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:fi,format:Kn,colorSpace:Wr,depthBuffer:!1},s=Ip(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ip(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Qy(r)),this._blurMaterial=ev(r,t,e),this._ggxMaterial=tv(r,t,e)}return s}_compileMaterial(t){let e=new Fe(new on,t);this._renderer.compile(e,vo)}_sceneToCubeUV(t,e,i,s,r){let c=new yn(90,1,e,i),l=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],d=this._renderer,m=d.autoClear,f=d.toneMapping;d.getClearColor(Rp),d.toneMapping=ci,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fe(new tn,new vn({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,g=v.material,x=!1,C=t.background;C?C.isColor&&(g.color.copy(C),t.background=null,x=!0):(g.color.copy(Rp),x=!0);for(let L=0;L<6;L++){let T=L%3;T===0?(c.up.set(0,l[L],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+p[L],r.y,r.z)):T===1?(c.up.set(0,0,l[L]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+p[L],r.z)):(c.up.set(0,l[L],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+p[L]));let S=this._cubeSize;dr(s,T*S,L>2?S:0,S,S),d.setRenderTarget(s),x&&d.render(v,c),d.render(t,c)}d.toneMapping=f,d.autoClear=m,t.background=C}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===ms||t.mapping===Ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;dr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,vo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let c=o.uniforms,l=i/(this._lodMeshes.length-1),p=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-p*p),m=l*1.25,f=d*m,{_lodMax:_}=this,v=this._sizeLods[i],g=3*v*(i>_-pr?i-_+pr:0),x=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=_-e,dr(r,g,x,3*v,2*v),s.setRenderTarget(r),s.render(a,vo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-i,dr(t,g,x,3*v,2*v),s.setRenderTarget(t),s.render(a,vo)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let p=this._sizeLods[s],d=3*p*(s>this._lodMax-pr?s-this._lodMax+pr:0),m=4*(this._cubeSize-p);dr(e,d,m,3*p,2*p),o.setRenderTarget(e),o.render(c,vo)}};function Qy(n){let t=[],e=[],i=n,s=n-pr+1+Zy;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),c=-a,l=1+a,p=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,m=6,f=3,_=new Float32Array(f*m*d),v=new Float32Array(f*m*d);for(let x=0;x<d;x++){let C=x%3*2/3-1,L=x>2?0:-1,T=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];_.set(T,f*m*x);for(let S=0;S<m;S++){let R=p[S*2]*2-1,N=p[S*2+1]*2-1;x===0?Ns.set(1,N,R):x===1?Ns.set(-R,1,-N):x===2?Ns.set(-R,N,1):x===3?Ns.set(-1,N,-R):x===4?Ns.set(-R,-1,N):Ns.set(R,N,-1),Ns.toArray(v,(x*m+S)*f)}}let g=new on;g.setAttribute("position",new Je(_,f)),g.setAttribute("outputDirection",new Je(v,f)),e.push(new Fe(g,null)),i>pr&&i--}return{lodMeshes:e,sizeLods:t}}function Ip(n,t,e){let i=new Ln(n,t,e);return i.texture.mapping=uo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function dr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function tv(n,t,e){return new Mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ky,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:sc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function ev(n,t,e){return new Mn({name:"SphericalGaussianBlur",defines:{SAMPLES:Jy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:sc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Pp(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Lp(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function sc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var nc=class extends Ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new io(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new tn(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:Ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rn,blending:Ci});r.uniforms.tEquirect.value=e;let o=new Fe(s,r),a=e.minFilter;return e.minFilter===gs&&(e.minFilter=rn),new cl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function nv(n){let t=new WeakMap,e=new WeakMap,i=null;function s(m,f=!1){return m==null?null:f?o(m):r(m)}function r(m){if(m&&m.isTexture){let f=m.mapping;if(f===fl||f===dl)if(t.has(m)){let _=t.get(m).texture;return a(_,m.mapping)}else{let _=m.image;if(_&&_.height>0){let v=new nc(_.height);return v.fromEquirectangularTexture(n,m),t.set(m,v),m.addEventListener("dispose",l),a(v.texture,m.mapping)}else return null}}return m}function o(m){if(m&&m.isTexture){let f=m.mapping,_=f===fl||f===dl,v=f===ms||f===Ls;if(_||v){let g=e.get(m),x=g!==void 0?g.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==x)return i===null&&(i=new ec(n)),g=_?i.fromEquirectangular(m,g):i.fromCubemap(m,g),g.texture.pmremVersion=m.pmremVersion,e.set(m,g),g.texture;if(g!==void 0)return g.texture;{let C=m.image;return _&&C&&C.height>0||v&&C&&c(C)?(i===null&&(i=new ec(n)),g=_?i.fromEquirectangular(m):i.fromCubemap(m),g.texture.pmremVersion=m.pmremVersion,e.set(m,g),m.addEventListener("dispose",p),g.texture):null}}}return m}function a(m,f){return f===fl?m.mapping=ms:f===dl&&(m.mapping=Ls),m}function c(m){let f=0,_=6;for(let v=0;v<_;v++)m[v]!==void 0&&f++;return f===_}function l(m){let f=m.target;f.removeEventListener("dispose",l);let _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function p(m){let f=m.target;f.removeEventListener("dispose",p);let _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function iv(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Ts("WebGLRenderer: "+i+" extension not supported."),s}}}function sv(n,t,e,i){let s={},r=new WeakMap;function o(d){let m=d.target;m.index!==null&&t.remove(m.index);for(let _ in m.attributes)t.remove(m.attributes[_]);m.removeEventListener("dispose",o),delete s[m.id];let f=r.get(m);f&&(t.remove(f),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function a(d,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,e.memory.geometries++),m}function c(d){let m=d.attributes;for(let f in m)t.update(m[f],n.ARRAY_BUFFER)}function l(d){let m=[],f=d.index,_=d.attributes.position,v=0;if(_===void 0)return;if(f!==null){let C=f.array;v=f.version;for(let L=0,T=C.length;L<T;L+=3){let S=C[L+0],R=C[L+1],N=C[L+2];m.push(S,R,R,N,N,S)}}else{let C=_.array;v=_.version;for(let L=0,T=C.length/3-1;L<T;L+=3){let S=L+0,R=L+1,N=L+2;m.push(S,R,R,N,N,S)}}let g=new(_.count>=65535?Qr:jr)(m,1);g.version=v;let x=r.get(d);x&&t.remove(x),r.set(d,g)}function p(d){let m=r.get(d);if(m){let f=d.index;f!==null&&m.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:p}}function rv(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,m){n.drawElements(i,m,r,d*o),e.update(m,i,1)}function l(d,m,f){f!==0&&(n.drawElementsInstanced(i,m,r,d*o,f),e.update(m,i,f))}function p(d,m,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,d,0,f);let v=0;for(let g=0;g<f;g++)v+=m[g];e.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=p}function ov(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:le("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function av(n,t,e){let i=new WeakMap,s=new $e;function r(o,a,c){let l=o.morphTargetInfluences,p=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=p!==void 0?p.length:0,m=i.get(a);if(m===void 0||m.count!==d){let A=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",A)};m!==void 0&&m.texture.dispose();let f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],C=a.morphAttributes.color||[],L=0;f===!0&&(L=1),_===!0&&(L=2),v===!0&&(L=3);let T=a.attributes.position.count*L,S=1;T>t.maxTextureSize&&(S=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let R=new Float32Array(T*S*4*d),N=new Zr(R,T,S,d);N.type=ui,N.needsUpdate=!0;let b=L*4;for(let U=0;U<d;U++){let B=g[U],Z=x[U],z=C[U],O=T*S*4*U;for(let k=0;k<B.count;k++){let j=k*b;f===!0&&(s.fromBufferAttribute(B,k),R[O+j+0]=s.x,R[O+j+1]=s.y,R[O+j+2]=s.z,R[O+j+3]=0),_===!0&&(s.fromBufferAttribute(Z,k),R[O+j+4]=s.x,R[O+j+5]=s.y,R[O+j+6]=s.z,R[O+j+7]=0),v===!0&&(s.fromBufferAttribute(z,k),R[O+j+8]=s.x,R[O+j+9]=s.y,R[O+j+10]=s.z,R[O+j+11]=z.itemSize===4?s.w:1)}}m={count:d,texture:N,size:new _e(T,S)},i.set(a,m),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];let _=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",m.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:r}}function lv(n,t,e,i,s){let r=new WeakMap;function o(l){let p=s.render.frame,d=l.geometry,m=t.get(l,d);if(r.get(m)!==p&&(t.update(m),r.set(m,p)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==p&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,p))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==p&&(f.update(),r.set(f,p))}return m}function a(){r=new WeakMap}function c(l){let p=l.target;p.removeEventListener("dispose",c),i.releaseStatesOfObject(p),e.remove(p.instanceMatrix),p.instanceColor!==null&&e.remove(p.instanceColor)}return{update:o,dispose:a}}var cv={[Lh]:"LINEAR_TONE_MAPPING",[Dh]:"REINHARD_TONE_MAPPING",[Nh]:"CINEON_TONE_MAPPING",[Uh]:"ACES_FILMIC_TONE_MAPPING",[Oh]:"AGX_TONE_MAPPING",[Bh]:"NEUTRAL_TONE_MAPPING",[Fh]:"CUSTOM_TONE_MAPPING"};function hv(n,t,e,i,s,r){let o=new Ln(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new on;l.setAttribute("position",new Tn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Tn([0,2,0,0,2,0],2));let p=new Ja({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Fe(l,p),m=new co(-1,1,1,-1,0,1),f=null,_=null,v=!1,g,x=null,C=[],L=!1;this.setSize=function(T,S){o.setSize(T,S),a!==null&&a.setSize(T,S),c!==null&&c.setSize(T,S);for(let R=0;R<C.length;R++){let N=C[R];N.setSize&&N.setSize(T,S)}},this.setEffects=function(T){C=T,L=C.length>0&&C[0].isRenderPass===!0;let S=o.width,R=o.height;C.length>0&&a===null&&(a=new Ln(S,R,{type:fi,depthBuffer:!1,stencilBuffer:!1}),c=new Ln(S,R,{type:fi,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<C.length;N++){let b=C[N];b.setSize&&b.setSize(S,R)}},this.begin=function(T,S){if(v||T.toneMapping===ci&&C.length===0)return!1;if(x=S,S!==null){let R=S.width,N=S.height;(o.width!==R||o.height!==N)&&this.setSize(R,N)}return L===!1&&T.setRenderTarget(o),g=T.toneMapping,T.toneMapping=ci,!0},this.hasRenderPass=function(){return L},this.end=function(T,S){T.toneMapping=g,v=!0;let R=o,N=a;for(let b=0;b<C.length;b++){let A=C[b];A.enabled!==!1&&(A.render(T,N,R,S),A.needsSwap!==!1&&(R=N,N=N===a?c:a))}if(f!==T.outputColorSpace||_!==T.toneMapping){f=T.outputColorSpace,_=T.toneMapping,p.defines={},Me.getTransfer(f)===Ue&&(p.defines.SRGB_TRANSFER="");let b=cv[_];b&&(p.defines[b]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=R.texture,T.setRenderTarget(x),T.render(d,m),x=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),p.dispose()}}var jp=new mn,uu=new hs(1,1),Qp=new Zr,tm=new Ga,em=new io,Dp=[],Np=[],Up=new Float32Array(16),Fp=new Float32Array(9),Op=new Float32Array(4);function gr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Dp[s];if(r===void 0&&(r=new Float32Array(s),Dp[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function an(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ln(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function rc(n,t){let e=Np[t];e===void 0&&(e=new Int32Array(t),Np[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function uv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function fv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;n.uniform2fv(this.addr,t),ln(e,t)}}function dv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(an(e,t))return;n.uniform3fv(this.addr,t),ln(e,t)}}function pv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;n.uniform4fv(this.addr,t),ln(e,t)}}function mv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(an(e,i))return;Op.set(i),n.uniformMatrix2fv(this.addr,!1,Op),ln(e,i)}}function gv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(an(e,i))return;Fp.set(i),n.uniformMatrix3fv(this.addr,!1,Fp),ln(e,i)}}function xv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(an(e,i))return;Up.set(i),n.uniformMatrix4fv(this.addr,!1,Up),ln(e,i)}}function _v(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function yv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;n.uniform2iv(this.addr,t),ln(e,t)}}function vv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;n.uniform3iv(this.addr,t),ln(e,t)}}function Mv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;n.uniform4iv(this.addr,t),ln(e,t)}}function bv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Sv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;n.uniform2uiv(this.addr,t),ln(e,t)}}function wv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;n.uniform3uiv(this.addr,t),ln(e,t)}}function Av(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;n.uniform4uiv(this.addr,t),ln(e,t)}}function Ev(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(uu.compareFunction=e.isReversedDepthBuffer()?jl:Kl,r=uu):r=jp,e.setTexture2D(t||r,s)}function Tv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||tm,s)}function Cv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||em,s)}function Rv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Qp,s)}function Iv(n){switch(n){case 5126:return uv;case 35664:return fv;case 35665:return dv;case 35666:return pv;case 35674:return mv;case 35675:return gv;case 35676:return xv;case 5124:case 35670:return _v;case 35667:case 35671:return yv;case 35668:case 35672:return vv;case 35669:case 35673:return Mv;case 5125:return bv;case 36294:return Sv;case 36295:return wv;case 36296:return Av;case 35678:case 36198:case 36298:case 36306:case 35682:return Ev;case 35679:case 36299:case 36307:return Tv;case 35680:case 36300:case 36308:case 36293:return Cv;case 36289:case 36303:case 36311:case 36292:return Rv}}function Pv(n,t){n.uniform1fv(this.addr,t)}function Lv(n,t){let e=gr(t,this.size,2);n.uniform2fv(this.addr,e)}function Dv(n,t){let e=gr(t,this.size,3);n.uniform3fv(this.addr,e)}function Nv(n,t){let e=gr(t,this.size,4);n.uniform4fv(this.addr,e)}function Uv(n,t){let e=gr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Fv(n,t){let e=gr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Ov(n,t){let e=gr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Bv(n,t){n.uniform1iv(this.addr,t)}function zv(n,t){n.uniform2iv(this.addr,t)}function kv(n,t){n.uniform3iv(this.addr,t)}function Vv(n,t){n.uniform4iv(this.addr,t)}function Hv(n,t){n.uniform1uiv(this.addr,t)}function Gv(n,t){n.uniform2uiv(this.addr,t)}function Wv(n,t){n.uniform3uiv(this.addr,t)}function Xv(n,t){n.uniform4uiv(this.addr,t)}function qv(n,t,e){let i=this.cache,s=t.length,r=rc(e,s);an(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=uu:o=jp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Yv(n,t,e){let i=this.cache,s=t.length,r=rc(e,s);an(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||tm,r[o])}function $v(n,t,e){let i=this.cache,s=t.length,r=rc(e,s);an(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||em,r[o])}function Zv(n,t,e){let i=this.cache,s=t.length,r=rc(e,s);an(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Qp,r[o])}function Jv(n){switch(n){case 5126:return Pv;case 35664:return Lv;case 35665:return Dv;case 35666:return Nv;case 35674:return Uv;case 35675:return Fv;case 35676:return Ov;case 5124:case 35670:return Bv;case 35667:case 35671:return zv;case 35668:case 35672:return kv;case 35669:case 35673:return Vv;case 5125:return Hv;case 36294:return Gv;case 36295:return Wv;case 36296:return Xv;case 35678:case 36198:case 36298:case 36306:case 35682:return qv;case 35679:case 36299:case 36307:return Yv;case 35680:case 36300:case 36308:case 36293:return $v;case 36289:case 36303:case 36311:case 36292:return Zv}}var fu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Iv(e.type)}},du=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jv(e.type)}},pu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},cu=/(\w+)(\])?(\[|\.)?/g;function Bp(n,t){n.seq.push(t),n.map[t.id]=t}function Kv(n,t,e){let i=n.name,s=i.length;for(cu.lastIndex=0;;){let r=cu.exec(i),o=cu.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Bp(e,l===void 0?new fu(a,n,t):new du(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new pu(a),Bp(e,d)),e=d}}}var mr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);Kv(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function zp(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var jv=37297,Qv=0;function tM(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var kp=new fe;function eM(n){Me._getMatrix(kp,Me.workingColorSpace,n);let t=`mat3( ${kp.elements.map(e=>e.toFixed(4))} )`;switch(Me.getTransfer(n)){case Xr:return[t,"LinearTransferOETF"];case Ue:return[t,"sRGBTransferOETF"];default:return ae("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Vp(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+tM(n.getShaderSource(t),a)}else return r}function nM(n,t){let e=eM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var iM={[Lh]:"Linear",[Dh]:"Reinhard",[Nh]:"Cineon",[Uh]:"ACESFilmic",[Oh]:"AgX",[Bh]:"Neutral",[Fh]:"Custom"};function sM(n,t){let e=iM[t];return e===void 0?(ae("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var tc=new K;function rM(){Me.getLuminanceCoefficients(tc);let n=tc.x.toFixed(4),t=tc.y.toFixed(4),e=tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function aM(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function lM(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function bo(n){return n!==""}function Hp(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var cM=/^[ \t]*#include +<([\w\d./]+)>/gm;function mu(n){return n.replace(cM,uM)}var hM=new Map;function uM(n,t){let e=ge[t];if(e===void 0){let i=hM.get(t);if(i!==void 0)e=ge[i],ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return mu(e)}var fM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wp(n){return n.replace(fM,dM)}function dM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xp(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var pM={[ho]:"SHADOWMAP_TYPE_PCF",[cr]:"SHADOWMAP_TYPE_VSM"};function mM(n){return pM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var gM={[ms]:"ENVMAP_TYPE_CUBE",[Ls]:"ENVMAP_TYPE_CUBE",[uo]:"ENVMAP_TYPE_CUBE_UV"};function xM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":gM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var _M={[Ls]:"ENVMAP_MODE_REFRACTION"};function yM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":_M[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var vM={[Ph]:"ENVMAP_BLENDING_MULTIPLY",[lp]:"ENVMAP_BLENDING_MIX",[cp]:"ENVMAP_BLENDING_ADD"};function MM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":vM[n.combine]||"ENVMAP_BLENDING_NONE"}function bM(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function SM(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=mM(e),l=xM(e),p=yM(e),d=MM(e),m=bM(e),f=oM(e),_=aM(r),v=s.createProgram(),g,x,C=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(bo).join(`
`),g.length>0&&(g+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(bo).join(`
`),x.length>0&&(x+=`
`)):(g=[Xp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),x=[Xp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+p:"",e.envMap?"#define "+d:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ci?"#define TONE_MAPPING":"",e.toneMapping!==ci?ge.tonemapping_pars_fragment:"",e.toneMapping!==ci?sM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,nM("linearToOutputTexel",e.outputColorSpace),rM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bo).join(`
`)),o=mu(o),o=Hp(o,e),o=Gp(o,e),a=mu(a),a=Hp(a,e),a=Gp(a,e),o=Wp(o),a=Wp(a),e.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,x=["#define varying in",e.glslVersion===Zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let L=C+g+o,T=C+x+a,S=zp(s,s.VERTEX_SHADER,L),R=zp(s,s.FRAGMENT_SHADER,T);s.attachShader(v,S),s.attachShader(v,R),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function N(B){if(n.debug.checkShaderErrors){let Z=s.getProgramInfoLog(v)||"",z=s.getShaderInfoLog(S)||"",O=s.getShaderInfoLog(R)||"",k=Z.trim(),j=z.trim(),$=O.trim(),it=!0,J=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(it=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,S,R);else{let nt=Vp(s,S,"vertex"),ot=Vp(s,R,"fragment");le("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+k+`
`+nt+`
`+ot)}else k!==""?ae("WebGLProgram: Program Info Log:",k):(j===""||$==="")&&(J=!1);J&&(B.diagnostics={runnable:it,programLog:k,vertexShader:{log:j,prefix:g},fragmentShader:{log:$,prefix:x}})}s.deleteShader(S),s.deleteShader(R),b=new mr(s,v),A=lM(s,v)}let b;this.getUniforms=function(){return b===void 0&&N(this),b};let A;this.getAttributes=function(){return A===void 0&&N(this),A};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(v,jv)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qv++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=R,this}var wM=0,gu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new xu(t),e.set(t,i)),i}},xu=class{constructor(t){this.id=wM++,this.code=t,this.usedTimes=0}};function AM(n){return n===_s||n===_o||n===yo}function EM(n,t,e,i,s,r){let o=new Jr,a=new gu,c=new Set,l=[],p=new Map,d=i.logarithmicDepthBuffer,m=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function v(b,A,U,B,Z,z){let O=B.fog,k=Z.geometry,j=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?B.environment:null,$=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,it=t.get(b.envMap||j,$),J=it&&it.mapping===uo?it.image.height:null,nt=f[b.type];b.precision!==null&&(m=i.getMaxPrecision(b.precision),m!==b.precision&&ae("WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));let ot=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Rt=ot!==void 0?ot.length:0,gt=0;k.morphAttributes.position!==void 0&&(gt=1),k.morphAttributes.normal!==void 0&&(gt=2),k.morphAttributes.color!==void 0&&(gt=3);let St,Tt,_t,X;if(nt){let Ae=Ii[nt];St=Ae.vertexShader,Tt=Ae.fragmentShader}else{St=b.vertexShader,Tt=b.fragmentShader;let Ae=a.getVertexShaderStage(b),we=a.getFragmentShaderStage(b);a.update(b,Ae,we),_t=Ae.id,X=we.id}let et=n.getRenderTarget(),ut=n.state.buffers.depth.getReversed(),zt=Z.isInstancedMesh===!0,mt=Z.isBatchedMesh===!0,Vt=!!b.map,oe=!!b.matcap,ft=!!it,ie=!!b.aoMap,Zt=!!b.lightMap,Xt=!!b.bumpMap&&b.wireframe===!1,re=!!b.normalMap,Ve=!!b.displacementMap,De=!!b.emissiveMap,Ce=!!b.metalnessMap,Ne=!!b.roughnessMap,H=b.anisotropy>0,He=b.clearcoat>0,pe=b.dispersion>0,F=b.retroreflectivity>0,y=b.iridescence>0,Y=b.sheen>0,tt=b.transmission>0,at=H&&!!b.anisotropyMap,At=He&&!!b.clearcoatMap,It=He&&!!b.clearcoatNormalMap,ht=He&&!!b.clearcoatRoughnessMap,dt=y&&!!b.iridescenceMap,Ct=y&&!!b.iridescenceThicknessMap,Kt=Y&&!!b.sheenColorMap,Dt=Y&&!!b.sheenRoughnessMap,Lt=!!b.specularMap,jt=!!b.specularColorMap,te=!!b.specularIntensityMap,de=tt&&!!b.transmissionMap,V=tt&&!!b.thicknessMap,Pt=!!b.gradientMap,ct=!!b.alphaMap,Et=b.alphaTest>0,Nt=!!b.alphaHash,xt=!!b.extensions,Jt=ci;b.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Jt=n.toneMapping);let $t={shaderID:nt,shaderType:b.type,shaderName:b.name,vertexShader:St,fragmentShader:Tt,defines:b.defines,customVertexShaderID:_t,customFragmentShaderID:X,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:mt,batchingColor:mt&&Z._colorsTexture!==null,instancing:zt,instancingColor:zt&&Z.instanceColor!==null,instancingMorph:zt&&Z.morphTexture!==null,outputColorSpace:et===null?n.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Me.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Vt,matcap:oe,envMap:ft,envMapMode:ft&&it.mapping,envMapCubeUVHeight:J,aoMap:ie,lightMap:Zt,bumpMap:Xt,normalMap:re,displacementMap:Ve,emissiveMap:De,normalMapObjectSpace:re&&b.normalMapType===fp,normalMapTangentSpace:re&&b.normalMapType===Yh,packedNormalMap:re&&b.normalMapType===Yh&&AM(b.normalMap.format),metalnessMap:Ce,roughnessMap:Ne,anisotropy:H,anisotropyMap:at,clearcoat:He,clearcoatMap:At,clearcoatNormalMap:It,clearcoatRoughnessMap:ht,dispersion:pe,retroreflection:F,iridescence:y,iridescenceMap:dt,iridescenceThicknessMap:Ct,sheen:Y,sheenColorMap:Kt,sheenRoughnessMap:Dt,specularMap:Lt,specularColorMap:jt,specularIntensityMap:te,transmission:tt,transmissionMap:de,thicknessMap:V,gradientMap:Pt,opaque:b.transparent===!1&&b.blending===hr&&b.alphaToCoverage===!1,alphaMap:ct,alphaTest:Et,alphaHash:Nt,combine:b.combine,mapUv:Vt&&_(b.map.channel),aoMapUv:ie&&_(b.aoMap.channel),lightMapUv:Zt&&_(b.lightMap.channel),bumpMapUv:Xt&&_(b.bumpMap.channel),normalMapUv:re&&_(b.normalMap.channel),displacementMapUv:Ve&&_(b.displacementMap.channel),emissiveMapUv:De&&_(b.emissiveMap.channel),metalnessMapUv:Ce&&_(b.metalnessMap.channel),roughnessMapUv:Ne&&_(b.roughnessMap.channel),anisotropyMapUv:at&&_(b.anisotropyMap.channel),clearcoatMapUv:At&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:It&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&_(b.sheenRoughnessMap.channel),specularMapUv:Lt&&_(b.specularMap.channel),specularColorMapUv:jt&&_(b.specularColorMap.channel),specularIntensityMapUv:te&&_(b.specularIntensityMap.channel),transmissionMapUv:de&&_(b.transmissionMap.channel),thicknessMapUv:V&&_(b.thicknessMap.channel),alphaMapUv:ct&&_(b.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(re||H),vertexNormals:!!k.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!k.attributes.uv&&(Vt||ct),fog:!!O,useFog:b.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||k.attributes.normal===void 0&&re===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ut,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:gt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:Jt,decodeVideoTexture:Vt&&b.map.isVideoTexture===!0&&Me.getTransfer(b.map.colorSpace)===Ue,decodeVideoTextureEmissive:De&&b.emissiveMap.isVideoTexture===!0&&Me.getTransfer(b.emissiveMap.colorSpace)===Ue,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Jn,flipSided:b.side===Rn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:xt&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&b.extensions.multiDraw===!0||mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return $t.vertexUv1s=c.has(1),$t.vertexUv2s=c.has(2),$t.vertexUv3s=c.has(3),c.clear(),$t}function g(b){let A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(let U in b.defines)A.push(U),A.push(b.defines[U]);return b.isRawShaderMaterial===!1&&(x(A,b),C(A,b),A.push(n.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function x(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.anisotropyMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numSunLights),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numSunLightShadows),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.numLightProbes),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function C(b,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function L(b){let A=f[b.type],U;if(A){let B=Ii[A];U=Ep.clone(B.uniforms)}else U=b.uniforms;return U}function T(b,A){let U=p.get(A);return U!==void 0?++U.usedTimes:(U=new SM(n,A,b,s),l.push(U),p.set(A,U)),U}function S(b){if(--b.usedTimes===0){let A=l.indexOf(b);l[A]=l[l.length-1],l.pop(),p.delete(b.cacheKey),b.destroy()}}function R(b){a.remove(b)}function N(){a.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:L,acquireProgram:T,releaseProgram:S,releaseShaderCache:R,programs:l,dispose:N}}function TM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function CM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function qp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Yp(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(m){let f=0;return m.isInstancedMesh&&(f+=2),m.isSkinnedMesh&&(f+=1),f}function a(m,f,_,v,g,x){let C=n[t];return C===void 0?(C={id:m.id,object:m,geometry:f,material:_,materialVariant:o(m),groupOrder:v,renderOrder:m.renderOrder,z:g,group:x},n[t]=C):(C.id=m.id,C.object=m,C.geometry=f,C.material=_,C.materialVariant=o(m),C.groupOrder=v,C.renderOrder=m.renderOrder,C.z=g,C.group=x),t++,C}function c(m,f,_,v,g,x,C){C.reversedDepth===!0&&(g=-g);let L=a(m,f,_,v,g,x);_.transmission>0?i.push(L):_.transparent===!0?s.push(L):e.push(L)}function l(m,f,_,v,g,x){let C=a(m,f,_,v,g,x);_.transmission>0?i.unshift(C):_.transparent===!0?s.unshift(C):e.unshift(C)}function p(m,f){e.length>1&&e.sort(m||CM),i.length>1&&i.sort(f||qp),s.length>1&&s.sort(f||qp)}function d(){for(let m=t,f=n.length;m<f;m++){let _=n[m];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:p}}function RM(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Yp,n.set(i,[o])):s>=r.length?(o=new Yp,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function IM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new K,color:new ce};break;case"SpotLight":e={position:new K,direction:new K,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new K,color:new ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new K,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":e={color:new ce,position:new K,halfWidth:new K,halfHeight:new K};break}return n[t.id]=e,e}}}function PM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var LM=0;function DM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function NM(n){let t=new IM,e=PM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new K);let s=new K,r=new qe,o=new qe;function a(l){let p=0,d=0,m=0;for(let Z=0;Z<9;Z++)i.probe[Z].set(0,0,0);let f=0,_=0,v=0,g=0,x=0,C=0,L=0,T=0,S=0,R=0,N=0,b=0,A=0,U=0;l.sort(DM);for(let Z=0,z=l.length;Z<z;Z++){let O=l[Z],k=O.color,j=O.intensity,$=O.distance,it=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===_s?it=O.shadow.map.texture:it=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)p+=k.r*j,d+=k.g*j,m+=k.b*j;else if(O.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(O.sh.coefficients[J],j);U++}else if(O.isSunLight){let J=t.get(O);if(J.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let nt=O.shadow,ot=e.get(O);ot.shadowIntensity=nt.intensity,ot.shadowBias=nt.bias,ot.shadowNormalBias=nt.normalBias,ot.shadowRadius=nt.radius,ot.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),i.sunShadow[_]=ot,i.sunShadowMap[_]=it;let Rt=nt.getViewportCount();for(let gt=0;gt<Rt;gt++)i.sunShadowMatrix[v+gt]=nt.getMatrix(gt),i.sunShadowCascade[v+gt]=nt._cascadeData[gt];v+=Rt,_++}i.sun[f]=J,f++}else if(O.isDirectionalLight){let J=t.get(O);if(J.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let nt=O.shadow,ot=e.get(O);ot.shadowIntensity=nt.intensity,ot.shadowBias=nt.bias,ot.shadowNormalBias=nt.normalBias,ot.shadowRadius=nt.radius,ot.shadowMapSize=nt.mapSize,i.directionalShadow[g]=ot,i.directionalShadowMap[g]=it,i.directionalShadowMatrix[g]=O.shadow.matrix,S++}i.directional[g]=J,g++}else if(O.isSpotLight){let J=t.get(O);J.position.setFromMatrixPosition(O.matrixWorld),J.color.copy(k).multiplyScalar(j),J.distance=$,J.coneCos=Math.cos(O.angle),J.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),J.decay=O.decay,i.spot[C]=J;let nt=O.shadow;if(O.map&&(i.spotLightMap[b]=O.map,b++,nt.updateMatrices(O),O.castShadow&&A++),i.spotLightMatrix[C]=nt.matrix,O.castShadow){let ot=e.get(O);ot.shadowIntensity=nt.intensity,ot.shadowBias=nt.bias,ot.shadowNormalBias=nt.normalBias,ot.shadowRadius=nt.radius,ot.shadowMapSize=nt.mapSize,i.spotShadow[C]=ot,i.spotShadowMap[C]=it,N++}C++}else if(O.isRectAreaLight){let J=t.get(O);J.color.copy(k).multiplyScalar(j),J.halfWidth.set(O.width*.5,0,0),J.halfHeight.set(0,O.height*.5,0),i.rectArea[L]=J,L++}else if(O.isPointLight){let J=t.get(O);if(J.color.copy(O.color).multiplyScalar(O.intensity),J.distance=O.distance,J.decay=O.decay,O.castShadow){let nt=O.shadow,ot=e.get(O);ot.shadowIntensity=nt.intensity,ot.shadowBias=nt.bias,ot.shadowNormalBias=nt.normalBias,ot.shadowRadius=nt.radius,ot.shadowMapSize=nt.mapSize,ot.shadowCameraNear=nt.camera.near,ot.shadowCameraFar=nt.camera.far,i.pointShadow[x]=ot,i.pointShadowMap[x]=it,i.pointShadowMatrix[x]=O.shadow.matrix,R++}i.point[x]=J,x++}else if(O.isHemisphereLight){let J=t.get(O);J.skyColor.copy(O.color).multiplyScalar(j),J.groundColor.copy(O.groundColor).multiplyScalar(j),i.hemi[T]=J,T++}}L>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ot.LTC_FLOAT_1,i.rectAreaLTC2=Ot.LTC_FLOAT_2):(i.rectAreaLTC1=Ot.LTC_HALF_1,i.rectAreaLTC2=Ot.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=d,i.ambient[2]=m;let B=i.hash;(B.sunLength!==f||B.directionalLength!==g||B.pointLength!==x||B.spotLength!==C||B.rectAreaLength!==L||B.hemiLength!==T||B.numSunShadows!==_||B.numDirectionalShadows!==S||B.numPointShadows!==R||B.numSpotShadows!==N||B.numSpotMaps!==b||B.numLightProbes!==U)&&(i.sun.length=f,i.directional.length=g,i.spot.length=C,i.rectArea.length=L,i.point.length=x,i.hemi.length=T,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=N,i.spotShadowMap.length=N,i.spotLightMatrix.length=N+b-A,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=U,B.sunLength=f,B.directionalLength=g,B.pointLength=x,B.spotLength=C,B.rectAreaLength=L,B.hemiLength=T,B.numSunShadows=_,B.numDirectionalShadows=S,B.numPointShadows=R,B.numSpotShadows=N,B.numSpotMaps=b,B.numLightProbes=U,i.version=LM++)}function c(l,p){let d=0,m=0,f=0,_=0,v=0,g=0,x=p.matrixWorldInverse;for(let C=0,L=l.length;C<L;C++){let T=l[C];if(T.isSunLight){let S=i.sun[d];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(x),d++}else if(T.isDirectionalLight){let S=i.directional[m];S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(x),m++}else if(T.isSpotLight){let S=i.spot[_];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(x),_++}else if(T.isRectAreaLight){let S=i.rectArea[v];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(x),o.identity(),r.copy(T.matrixWorld),r.premultiply(x),o.extractRotation(r),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(x),f++}else if(T.isHemisphereLight){let S=i.hemi[g];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(x),g++}}}return{setup:a,setupView:c,state:i}}function $p(n){let t=new NM(n),e=[],i=[],s=[];function r(m){d.camera=m,e.length=0,i.length=0,s.length=0}function o(m){e.push(m)}function a(m){i.push(m)}function c(m){s.push(m)}function l(){t.setup(e)}function p(m){t.setupView(e,m)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:p,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function UM(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new $p(n),t.set(s,[a])):r>=o.length?(a=new $p(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var FM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,BM=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],zM=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Zp=new qe,Mo=new K,hu=new K;function kM(n,t,e){let i=new eo,s=new _e,r=new _e,o=new $e,a=new Ka,c=new ja,l={},p=e.maxTextureSize,d={[ps]:Rn,[Rn]:ps,[Jn]:Jn},m=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:FM,fragmentShader:OM}),f=m.clone();f.defines.HORIZONTAL_PASS=1;let _=new on;_.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Fe(_,m),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ho;let x=this.type;this.render=function(R,N,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;this.type===Gd&&(ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ho);let A=n.getRenderTarget(),U=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),Z=n.state;Z.setBlending(Ci),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let z=x!==this.type;z&&N.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(k=>k.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,k=R.length;O<k;O++){let j=R[O],$=j.shadow;if($===void 0){ae("WebGLShadowMap:",j,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let it=$.getFrameExtents();s.multiply(it),r.copy($.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(r.x=Math.floor(p/it.x),s.x=r.x*it.x,$.mapSize.x=r.x),s.y>p&&(r.y=Math.floor(p/it.y),s.y=r.y*it.y,$.mapSize.y=r.y));let J=n.state.buffers.depth.getReversed();if($.camera._reversedDepth=J,$.map===null||z===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===cr){if(j.isPointLight){ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Ln(s.x,s.y,{format:_s,type:fi,minFilter:rn,magFilter:rn,generateMipmaps:!1}),$.map.texture.name=j.name+".shadowMap",$.map.depthTexture=new hs(s.x,s.y,ui),$.map.depthTexture.name=j.name+".shadowMapDepth",$.map.depthTexture.format=wi,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=un,$.map.depthTexture.magFilter=un}else j.isPointLight?($.map=new nc(s.x),$.map.depthTexture=new Za(s.x,hi)):($.map=new Ln(s.x,s.y),$.map.depthTexture=new hs(s.x,s.y,hi)),$.map.depthTexture.name=j.name+".shadowMap",$.map.depthTexture.format=wi,this.type===ho?($.map.depthTexture.compareFunction=J?jl:Kl,$.map.depthTexture.minFilter=rn,$.map.depthTexture.magFilter=rn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=un,$.map.depthTexture.magFilter=un);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==s.x||$.map.height!==s.y)&&$.map.setSize(s.x,s.y);let nt=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();j.isPointLight!==!0&&$.updateMatrices(j,b);for(let ot=0;ot<nt;ot++){let Rt=$.getCamera(ot);if(j.isPointLight){let gt=$.camera,St=$.matrix,Tt=j.distance||gt.far;Tt!==gt.far&&(gt.far=Tt,gt.updateProjectionMatrix()),Mo.setFromMatrixPosition(j.matrixWorld),gt.position.copy(Mo),hu.copy(gt.position),hu.add(BM[ot]),gt.up.copy(zM[ot]),gt.lookAt(hu),gt.updateMatrixWorld(),St.makeTranslation(-Mo.x,-Mo.y,-Mo.z),Zp.multiplyMatrices(gt.projectionMatrix,gt.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Zp,gt.coordinateSystem,gt.reversedDepth)}if($.map.isWebGLCubeRenderTarget)n.setRenderTarget($.map,ot),n.clear();else{ot===0&&(n.setRenderTarget($.map),n.clear());let gt=$.getViewport(ot);o.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),Z.viewport(o)}i=$.getFrustum(ot),T(N,b,Rt,j,this.type)}$.isPointLightShadow!==!0&&this.type===cr&&C($,b),$.needsUpdate=!1}x=this.type,g.needsUpdate=!1,n.setRenderTarget(A,U,B)};function C(R,N){let b=t.update(v);m.defines.VSM_SAMPLES!==R.blurSamples&&(m.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,m.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null?R.mapPass=new Ln(s.x,s.y,{format:_s,type:fi}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),m.uniforms.shadow_pass.value=R.map.depthTexture,m.uniforms.resolution.value.set(R.map.width,R.map.height),m.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(N,null,b,m,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value.set(R.map.width,R.map.height),f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(N,null,b,f,v,null)}function L(R,N,b,A){let U=null,B=b.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(B!==void 0)U=B;else if(U=b.isPointLight===!0?c:a,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){let Z=U.uuid,z=N.uuid,O=l[Z];O===void 0&&(O={},l[Z]=O);let k=O[z];k===void 0&&(k=U.clone(),O[z]=k,N.addEventListener("dispose",S)),U=k}if(U.visible=N.visible,U.wireframe=N.wireframe,A===cr?U.side=N.shadowSide!==null?N.shadowSide:N.side:U.side=N.shadowSide!==null?N.shadowSide:d[N.side],U.alphaMap=N.alphaMap,U.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,U.map=N.map,U.clipShadows=N.clipShadows,U.clippingPlanes=N.clippingPlanes,U.clipIntersection=N.clipIntersection,U.displacementMap=N.displacementMap,U.displacementScale=N.displacementScale,U.displacementBias=N.displacementBias,U.wireframeLinewidth=N.wireframeLinewidth,U.linewidth=N.linewidth,b.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let Z=n.properties.get(U);Z.light=b}return U}function T(R,N,b,A,U){if(R.visible===!1)return;if(R.layers.test(N.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&U===cr)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,R.matrixWorld);let z=t.update(R),O=R.material;if(Array.isArray(O)){let k=z.groups;for(let j=0,$=k.length;j<$;j++){let it=k[j],J=O[it.materialIndex];if(J&&J.visible){let nt=L(R,J,A,U);R.onBeforeShadow(n,R,N,b,z,nt,it),n.renderBufferDirect(b,null,z,nt,R,it),R.onAfterShadow(n,R,N,b,z,nt,it)}}}else if(O.visible){let k=L(R,O,A,U);R.onBeforeShadow(n,R,N,b,z,k,null),n.renderBufferDirect(b,null,z,k,R,null),R.onAfterShadow(n,R,N,b,z,k,null)}}let Z=R.children;for(let z=0,O=Z.length;z<O;z++)T(Z[z],N,b,A,U)}function S(R){R.target.removeEventListener("dispose",S);for(let b in l){let A=l[b],U=R.target.uuid;U in A&&(A[U].dispose(),delete A[U])}}}function VM(n,t){function e(){let V=!1,Pt=new $e,ct=null,Et=new $e(0,0,0,0);return{setMask:function(Nt){ct!==Nt&&!V&&(n.colorMask(Nt,Nt,Nt,Nt),ct=Nt)},setLocked:function(Nt){V=Nt},setClear:function(Nt,xt,Jt,$t,Ae){Ae===!0&&(Nt*=$t,xt*=$t,Jt*=$t),Pt.set(Nt,xt,Jt,$t),Et.equals(Pt)===!1&&(n.clearColor(Nt,xt,Jt,$t),Et.copy(Pt))},reset:function(){V=!1,ct=null,Et.set(-1,0,0,0)}}}function i(){let V=!1,Pt=!1,ct=null,Et=null,Nt=null;return{setReversed:function(xt){if(Pt!==xt){let Jt=t.get("EXT_clip_control");xt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),Pt=xt;let $t=Nt;Nt=null,this.setClear($t)}},getReversed:function(){return Pt},setTest:function(xt){xt?et(n.DEPTH_TEST):ut(n.DEPTH_TEST)},setMask:function(xt){ct!==xt&&!V&&(n.depthMask(xt),ct=xt)},setFunc:function(xt){if(Pt&&(xt=Sp[xt]),Et!==xt){switch(xt){case Ia:n.depthFunc(n.NEVER);break;case Pa:n.depthFunc(n.ALWAYS);break;case La:n.depthFunc(n.LESS);break;case ir:n.depthFunc(n.LEQUAL);break;case Da:n.depthFunc(n.EQUAL);break;case Na:n.depthFunc(n.GEQUAL);break;case Ua:n.depthFunc(n.GREATER);break;case Fa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Et=xt}},setLocked:function(xt){V=xt},setClear:function(xt){Nt!==xt&&(Nt=xt,Pt&&(xt=1-xt),n.clearDepth(xt))},reset:function(){V=!1,ct=null,Et=null,Nt=null,Pt=!1}}}function s(){let V=!1,Pt=null,ct=null,Et=null,Nt=null,xt=null,Jt=null,$t=null,Ae=null;return{setTest:function(we){V||(we?et(n.STENCIL_TEST):ut(n.STENCIL_TEST))},setMask:function(we){Pt!==we&&!V&&(n.stencilMask(we),Pt=we)},setFunc:function(we,In,Gn){(ct!==we||Et!==In||Nt!==Gn)&&(n.stencilFunc(we,In,Gn),ct=we,Et=In,Nt=Gn)},setOp:function(we,In,Gn){(xt!==we||Jt!==In||$t!==Gn)&&(n.stencilOp(we,In,Gn),xt=we,Jt=In,$t=Gn)},setLocked:function(we){V=we},setClear:function(we){Ae!==we&&(n.clearStencil(we),Ae=we)},reset:function(){V=!1,Pt=null,ct=null,Et=null,Nt=null,xt=null,Jt=null,$t=null,Ae=null}}}let r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap,p={},d={},m={},f=new WeakMap,_=[],v=null,g=!1,x=null,C=null,L=null,T=null,S=null,R=null,N=null,b=new ce(0,0,0),A=0,U=!1,B=null,Z=null,z=null,O=null,k=null,j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,it=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(J)[1]),$=it>=1):J.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),$=it>=2);let nt=null,ot={},Rt=n.getParameter(n.SCISSOR_BOX),gt=n.getParameter(n.VIEWPORT),St=new $e().fromArray(Rt),Tt=new $e().fromArray(gt);function _t(V,Pt,ct,Et){let Nt=new Uint8Array(4),xt=n.createTexture();n.bindTexture(V,xt),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Jt=0;Jt<ct;Jt++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(Pt,0,n.RGBA,1,1,Et,0,n.RGBA,n.UNSIGNED_BYTE,Nt):n.texImage2D(Pt+Jt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Nt);return xt}let X={};X[n.TEXTURE_2D]=_t(n.TEXTURE_2D,n.TEXTURE_2D,1),X[n.TEXTURE_CUBE_MAP]=_t(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[n.TEXTURE_2D_ARRAY]=_t(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),X[n.TEXTURE_3D]=_t(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(n.DEPTH_TEST),o.setFunc(ir),Xt(!1),re(Ah),et(n.CULL_FACE),ie(Ci);function et(V){p[V]!==!0&&(n.enable(V),p[V]=!0)}function ut(V){p[V]!==!1&&(n.disable(V),p[V]=!1)}function zt(V,Pt){return m[V]!==Pt?(n.bindFramebuffer(V,Pt),m[V]=Pt,V===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Pt),V===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Pt),!0):!1}function mt(V,Pt){let ct=_,Et=!1;if(V){ct=f.get(Pt),ct===void 0&&(ct=[],f.set(Pt,ct));let Nt=V.textures;if(ct.length!==Nt.length||ct[0]!==n.COLOR_ATTACHMENT0){for(let xt=0,Jt=Nt.length;xt<Jt;xt++)ct[xt]=n.COLOR_ATTACHMENT0+xt;ct.length=Nt.length,Et=!0}}else ct[0]!==n.BACK&&(ct[0]=n.BACK,Et=!0);Et&&n.drawBuffers(ct)}function Vt(V){return v!==V?(n.useProgram(V),v=V,!0):!1}let oe={[Ps]:n.FUNC_ADD,[Xd]:n.FUNC_SUBTRACT,[qd]:n.FUNC_REVERSE_SUBTRACT};oe[Yd]=n.MIN,oe[$d]=n.MAX;let ft={[Zd]:n.ZERO,[Jd]:n.ONE,[Kd]:n.SRC_COLOR,[Rh]:n.SRC_ALPHA,[ip]:n.SRC_ALPHA_SATURATE,[ep]:n.DST_COLOR,[Qd]:n.DST_ALPHA,[jd]:n.ONE_MINUS_SRC_COLOR,[Ih]:n.ONE_MINUS_SRC_ALPHA,[np]:n.ONE_MINUS_DST_COLOR,[tp]:n.ONE_MINUS_DST_ALPHA,[sp]:n.CONSTANT_COLOR,[rp]:n.ONE_MINUS_CONSTANT_COLOR,[op]:n.CONSTANT_ALPHA,[ap]:n.ONE_MINUS_CONSTANT_ALPHA};function ie(V,Pt,ct,Et,Nt,xt,Jt,$t,Ae,we){if(V===Ci){g===!0&&(ut(n.BLEND),g=!1);return}if(g===!1&&(et(n.BLEND),g=!0),V!==Wd){if(V!==x||we!==U){if((C!==Ps||S!==Ps)&&(n.blendEquation(n.FUNC_ADD),C=Ps,S=Ps),we)switch(V){case hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Eh:n.blendFunc(n.ONE,n.ONE);break;case Th:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ch:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:le("WebGLState: Invalid blending: ",V);break}else switch(V){case hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Eh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Th:le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ch:le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:le("WebGLState: Invalid blending: ",V);break}L=null,T=null,R=null,N=null,b.set(0,0,0),A=0,x=V,U=we}return}Nt=Nt||Pt,xt=xt||ct,Jt=Jt||Et,(Pt!==C||Nt!==S)&&(n.blendEquationSeparate(oe[Pt],oe[Nt]),C=Pt,S=Nt),(ct!==L||Et!==T||xt!==R||Jt!==N)&&(n.blendFuncSeparate(ft[ct],ft[Et],ft[xt],ft[Jt]),L=ct,T=Et,R=xt,N=Jt),($t.equals(b)===!1||Ae!==A)&&(n.blendColor($t.r,$t.g,$t.b,Ae),b.copy($t),A=Ae),x=V,U=!1}function Zt(V,Pt){V.side===Jn?ut(n.CULL_FACE):et(n.CULL_FACE);let ct=V.side===Rn;Pt&&(ct=!ct),Xt(ct),V.blending===hr&&V.transparent===!1?ie(Ci):ie(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let Et=V.stencilWrite;a.setTest(Et),Et&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),De(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?et(n.SAMPLE_ALPHA_TO_COVERAGE):ut(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(V){B!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),B=V)}function re(V){V!==Vd?(et(n.CULL_FACE),V!==Z&&(V===Ah?n.cullFace(n.BACK):V===Hd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ut(n.CULL_FACE),Z=V}function Ve(V){V!==z&&($&&n.lineWidth(V),z=V)}function De(V,Pt,ct){V?(et(n.POLYGON_OFFSET_FILL),(O!==Pt||k!==ct)&&(O=Pt,k=ct,o.getReversed()&&(Pt=-Pt),n.polygonOffset(Pt,ct))):ut(n.POLYGON_OFFSET_FILL)}function Ce(V){V?et(n.SCISSOR_TEST):ut(n.SCISSOR_TEST)}function Ne(V){V===void 0&&(V=n.TEXTURE0+j-1),nt!==V&&(n.activeTexture(V),nt=V)}function H(V,Pt,ct){ct===void 0&&(nt===null?ct=n.TEXTURE0+j-1:ct=nt);let Et=ot[ct];Et===void 0&&(Et={type:void 0,texture:void 0},ot[ct]=Et),(Et.type!==V||Et.texture!==Pt)&&(nt!==ct&&(n.activeTexture(ct),nt=ct),n.bindTexture(V,Pt||X[V]),Et.type=V,Et.texture=Pt)}function He(){let V=ot[nt];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function pe(){try{n.compressedTexImage2D(...arguments)}catch(V){le("WebGLState:",V)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(V){le("WebGLState:",V)}}function y(){try{n.texSubImage2D(...arguments)}catch(V){le("WebGLState:",V)}}function Y(){try{n.texSubImage3D(...arguments)}catch(V){le("WebGLState:",V)}}function tt(){try{n.compressedTexSubImage2D(...arguments)}catch(V){le("WebGLState:",V)}}function at(){try{n.compressedTexSubImage3D(...arguments)}catch(V){le("WebGLState:",V)}}function At(){try{n.texStorage2D(...arguments)}catch(V){le("WebGLState:",V)}}function It(){try{n.texStorage3D(...arguments)}catch(V){le("WebGLState:",V)}}function ht(){try{n.texImage2D(...arguments)}catch(V){le("WebGLState:",V)}}function dt(){try{n.texImage3D(...arguments)}catch(V){le("WebGLState:",V)}}function Ct(V){return d[V]!==void 0?d[V]:n.getParameter(V)}function Kt(V,Pt){d[V]!==Pt&&(n.pixelStorei(V,Pt),d[V]=Pt)}function Dt(V){St.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),St.copy(V))}function Lt(V){Tt.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),Tt.copy(V))}function jt(V,Pt){let ct=l.get(Pt);ct===void 0&&(ct=new WeakMap,l.set(Pt,ct));let Et=ct.get(V);Et===void 0&&(Et=n.getUniformBlockIndex(Pt,V.name),ct.set(V,Et))}function te(V,Pt){let Et=l.get(Pt).get(V);c.get(Pt)!==Et&&(n.uniformBlockBinding(Pt,Et,V.__bindingPointIndex),c.set(Pt,Et))}function de(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),p={},d={},nt=null,ot={},m={},f=new WeakMap,_=[],v=null,g=!1,x=null,C=null,L=null,T=null,S=null,R=null,N=null,b=new ce(0,0,0),A=0,U=!1,B=null,Z=null,z=null,O=null,k=null,St.set(0,0,n.canvas.width,n.canvas.height),Tt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:ut,bindFramebuffer:zt,drawBuffers:mt,useProgram:Vt,setBlending:ie,setMaterial:Zt,setFlipSided:Xt,setCullFace:re,setLineWidth:Ve,setPolygonOffset:De,setScissorTest:Ce,activeTexture:Ne,bindTexture:H,unbindTexture:He,compressedTexImage2D:pe,compressedTexImage3D:F,texImage2D:ht,texImage3D:dt,pixelStorei:Kt,getParameter:Ct,updateUBOMapping:jt,uniformBlockBinding:te,texStorage2D:At,texStorage3D:It,texSubImage2D:y,texSubImage3D:Y,compressedTexSubImage2D:tt,compressedTexSubImage3D:at,scissor:Dt,viewport:Lt,reset:de}}function HM(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new _e,p=new WeakMap,d=new Set,m,f=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(F,y){return _?new OffscreenCanvas(F,y):Yr("canvas")}function g(F,y,Y){let tt=1,at=pe(F);if((at.width>Y||at.height>Y)&&(tt=Y/Math.max(at.width,at.height)),tt<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let At=Math.floor(tt*at.width),It=Math.floor(tt*at.height);m===void 0&&(m=v(At,It));let ht=y?v(At,It):m;return ht.width=At,ht.height=It,ht.getContext("2d").drawImage(F,0,0,At,It),ae("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+At+"x"+It+")."),ht}else return"data"in F&&ae("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),F;return F}function x(F){return F.generateMipmaps}function C(F){n.generateMipmap(F)}function L(F){return F.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?n.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(F,y,Y,tt,at,At=!1){if(F!==null){if(n[F]!==void 0)return n[F];ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let It;tt&&(It=t.get("EXT_texture_norm16"),It||ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ht=y;if(y===n.RED&&(Y===n.FLOAT&&(ht=n.R32F),Y===n.HALF_FLOAT&&(ht=n.R16F),Y===n.UNSIGNED_BYTE&&(ht=n.R8),Y===n.UNSIGNED_SHORT&&It&&(ht=It.R16_EXT),Y===n.SHORT&&It&&(ht=It.R16_SNORM_EXT)),y===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ht=n.R8UI),Y===n.UNSIGNED_SHORT&&(ht=n.R16UI),Y===n.UNSIGNED_INT&&(ht=n.R32UI),Y===n.BYTE&&(ht=n.R8I),Y===n.SHORT&&(ht=n.R16I),Y===n.INT&&(ht=n.R32I)),y===n.RG&&(Y===n.FLOAT&&(ht=n.RG32F),Y===n.HALF_FLOAT&&(ht=n.RG16F),Y===n.UNSIGNED_BYTE&&(ht=n.RG8),Y===n.UNSIGNED_SHORT&&It&&(ht=It.RG16_EXT),Y===n.SHORT&&It&&(ht=It.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ht=n.RG8UI),Y===n.UNSIGNED_SHORT&&(ht=n.RG16UI),Y===n.UNSIGNED_INT&&(ht=n.RG32UI),Y===n.BYTE&&(ht=n.RG8I),Y===n.SHORT&&(ht=n.RG16I),Y===n.INT&&(ht=n.RG32I)),y===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ht=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(ht=n.RGB16UI),Y===n.UNSIGNED_INT&&(ht=n.RGB32UI),Y===n.BYTE&&(ht=n.RGB8I),Y===n.SHORT&&(ht=n.RGB16I),Y===n.INT&&(ht=n.RGB32I)),y===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ht=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(ht=n.RGBA16UI),Y===n.UNSIGNED_INT&&(ht=n.RGBA32UI),Y===n.BYTE&&(ht=n.RGBA8I),Y===n.SHORT&&(ht=n.RGBA16I),Y===n.INT&&(ht=n.RGBA32I)),y===n.RGB&&(Y===n.UNSIGNED_SHORT&&It&&(ht=It.RGB16_EXT),Y===n.SHORT&&It&&(ht=It.RGB16_SNORM_EXT),Y===n.UNSIGNED_INT_5_9_9_9_REV&&(ht=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(ht=n.R11F_G11F_B10F)),y===n.RGBA){let dt=At?Xr:Me.getTransfer(at);Y===n.FLOAT&&(ht=n.RGBA32F),Y===n.HALF_FLOAT&&(ht=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(ht=dt===Ue?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT&&It&&(ht=It.RGBA16_EXT),Y===n.SHORT&&It&&(ht=It.RGBA16_SNORM_EXT),Y===n.UNSIGNED_SHORT_4_4_4_4&&(ht=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(ht=n.RGB5_A1)}return(ht===n.R16F||ht===n.R32F||ht===n.RG16F||ht===n.RG32F||ht===n.RGBA16F||ht===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function S(F,y){let Y;return F?y===null||y===hi||y===fr?Y=n.DEPTH24_STENCIL8:y===ui?Y=n.DEPTH32F_STENCIL8:y===ur&&(Y=n.DEPTH24_STENCIL8,ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===hi||y===fr?Y=n.DEPTH_COMPONENT24:y===ui?Y=n.DEPTH_COMPONENT32F:y===ur&&(Y=n.DEPTH_COMPONENT16),Y}function R(F,y){return x(F)===!0||F.isFramebufferTexture&&F.minFilter!==un&&F.minFilter!==rn?Math.log2(Math.max(y.width,y.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?y.mipmaps.length:1}function N(F){let y=F.target;y.removeEventListener("dispose",N),A(y),y.isVideoTexture&&p.delete(y),y.isHTMLTexture&&d.delete(y)}function b(F){let y=F.target;y.removeEventListener("dispose",b),B(y)}function A(F){let y=i.get(F);if(y.__webglInit===void 0)return;let Y=F.source,tt=f.get(Y);if(tt){let at=tt[y.__cacheKey];at.usedTimes--,at.usedTimes===0&&U(F),Object.keys(tt).length===0&&f.delete(Y)}i.remove(F)}function U(F){let y=i.get(F);n.deleteTexture(y.__webglTexture);let Y=F.source,tt=f.get(Y);delete tt[y.__cacheKey],o.memory.textures--}function B(F){let y=i.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),i.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(y.__webglFramebuffer[tt]))for(let at=0;at<y.__webglFramebuffer[tt].length;at++)n.deleteFramebuffer(y.__webglFramebuffer[tt][at]);else n.deleteFramebuffer(y.__webglFramebuffer[tt]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[tt])}else{if(Array.isArray(y.__webglFramebuffer))for(let tt=0;tt<y.__webglFramebuffer.length;tt++)n.deleteFramebuffer(y.__webglFramebuffer[tt]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let tt=0;tt<y.__webglColorRenderbuffer.length;tt++)y.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[tt]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let Y=F.textures;for(let tt=0,at=Y.length;tt<at;tt++){let At=i.get(Y[tt]);At.__webglTexture&&(n.deleteTexture(At.__webglTexture),o.memory.textures--),i.remove(Y[tt])}i.remove(F)}let Z=0;function z(){Z=0}function O(){return Z}function k(F){Z=F}function j(){let F=Z;return F>=s.maxTextures&&ae("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),Z+=1,F}function $(F){let y=[];return y.push(F.wrapS),y.push(F.wrapT),y.push(F.wrapR||0),y.push(F.magFilter),y.push(F.minFilter),y.push(F.anisotropy),y.push(F.internalFormat),y.push(F.format),y.push(F.type),y.push(F.generateMipmaps),y.push(F.premultiplyAlpha),y.push(F.flipY),y.push(F.unpackAlignment),y.push(F.colorSpace),y.join()}function it(F,y){let Y=i.get(F);if(F.isVideoTexture&&H(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&Y.__version!==F.version){let tt=F.image;if(tt===null)ae("WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)ae("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(Y,F,y);return}}else F.isExternalTexture&&(Y.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+y)}function J(F,y){let Y=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Y.__version!==F.version){ut(Y,F,y);return}else F.isExternalTexture&&(Y.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+y)}function nt(F,y){let Y=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Y.__version!==F.version){ut(Y,F,y);return}e.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+y)}function ot(F,y){let Y=i.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&Y.__version!==F.version){zt(Y,F,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+y)}let Rt={[Oa]:n.REPEAT,[Si]:n.CLAMP_TO_EDGE,[Ba]:n.MIRRORED_REPEAT},gt={[un]:n.NEAREST,[hp]:n.NEAREST_MIPMAP_NEAREST,[fo]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[pl]:n.LINEAR_MIPMAP_NEAREST,[gs]:n.LINEAR_MIPMAP_LINEAR},St={[pp]:n.NEVER,[yp]:n.ALWAYS,[mp]:n.LESS,[Kl]:n.LEQUAL,[gp]:n.EQUAL,[jl]:n.GEQUAL,[xp]:n.GREATER,[_p]:n.NOTEQUAL};function Tt(F,y){if(y.type===ui&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===rn||y.magFilter===pl||y.magFilter===fo||y.magFilter===gs||y.minFilter===rn||y.minFilter===pl||y.minFilter===fo||y.minFilter===gs)&&ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(F,n.TEXTURE_WRAP_S,Rt[y.wrapS]),n.texParameteri(F,n.TEXTURE_WRAP_T,Rt[y.wrapT]),(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)&&n.texParameteri(F,n.TEXTURE_WRAP_R,Rt[y.wrapR]),n.texParameteri(F,n.TEXTURE_MAG_FILTER,gt[y.magFilter]),n.texParameteri(F,n.TEXTURE_MIN_FILTER,gt[y.minFilter]),y.compareFunction&&(n.texParameteri(F,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(F,n.TEXTURE_COMPARE_FUNC,St[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===un||y.minFilter!==fo&&y.minFilter!==gs||y.type===ui&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");n.texParameterf(F,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function _t(F,y){let Y=!1;F.__webglInit===void 0&&(F.__webglInit=!0,y.addEventListener("dispose",N));let tt=y.source,at=f.get(tt);at===void 0&&(at={},f.set(tt,at));let At=$(y);if(At!==F.__cacheKey){at[At]===void 0&&(at[At]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),at[At].usedTimes++;let It=at[F.__cacheKey];It!==void 0&&(at[F.__cacheKey].usedTimes--,It.usedTimes===0&&U(y)),F.__cacheKey=At,F.__webglTexture=at[At].texture}return Y}function X(F,y,Y){return Math.floor(Math.floor(F/Y)/y)}function et(F,y,Y,tt){let At=F.updateRanges;if(At.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,Y,tt,y.data);else{At.sort((Kt,Dt)=>Kt.start-Dt.start);let It=0;for(let Kt=1;Kt<At.length;Kt++){let Dt=At[It],Lt=At[Kt],jt=Dt.start+Dt.count,te=X(Lt.start,y.width,4),de=X(Dt.start,y.width,4);Lt.start<=jt+1&&te===de&&X(Lt.start+Lt.count-1,y.width,4)===te?Dt.count=Math.max(Dt.count,Lt.start+Lt.count-Dt.start):(++It,At[It]=Lt)}At.length=It+1;let ht=e.getParameter(n.UNPACK_ROW_LENGTH),dt=e.getParameter(n.UNPACK_SKIP_PIXELS),Ct=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let Kt=0,Dt=At.length;Kt<Dt;Kt++){let Lt=At[Kt],jt=Math.floor(Lt.start/4),te=Math.ceil(Lt.count/4),de=jt%y.width,V=Math.floor(jt/y.width),Pt=te,ct=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,de),e.pixelStorei(n.UNPACK_SKIP_ROWS,V),e.texSubImage2D(n.TEXTURE_2D,0,de,V,Pt,ct,Y,tt,y.data)}F.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,ht),e.pixelStorei(n.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Ct)}}function ut(F,y,Y){let tt=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(tt=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(tt=n.TEXTURE_3D);let at=_t(F,y),At=y.source;e.bindTexture(tt,F.__webglTexture,n.TEXTURE0+Y);let It=i.get(At);if(At.version!==It.__version||at===!0){if(e.activeTexture(n.TEXTURE0+Y),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let ct=Me.getPrimaries(Me.workingColorSpace),Et=y.colorSpace===Gi?null:Me.getPrimaries(y.colorSpace),Nt=y.colorSpace===Gi||ct===Et?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt)}e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let dt=g(y.image,!1,s.maxTextureSize);dt=He(y,dt);let Ct=r.convert(y.format,y.colorSpace),Kt=r.convert(y.type),Dt=T(y.internalFormat,Ct,Kt,y.normalized,y.colorSpace,y.isVideoTexture);Tt(tt,y);let Lt,jt=y.mipmaps,te=y.isVideoTexture!==!0,de=It.__version===void 0||at===!0,V=At.dataReady,Pt=R(y,dt);if(y.isDepthTexture)Dt=S(y.format===xs,y.type),de&&(te?e.texStorage2D(n.TEXTURE_2D,1,Dt,dt.width,dt.height):e.texImage2D(n.TEXTURE_2D,0,Dt,dt.width,dt.height,0,Ct,Kt,null));else if(y.isDataTexture)if(jt.length>0){te&&de&&e.texStorage2D(n.TEXTURE_2D,Pt,Dt,jt[0].width,jt[0].height);for(let ct=0,Et=jt.length;ct<Et;ct++)Lt=jt[ct],te?V&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,Lt.width,Lt.height,Ct,Kt,Lt.data):e.texImage2D(n.TEXTURE_2D,ct,Dt,Lt.width,Lt.height,0,Ct,Kt,Lt.data);y.generateMipmaps=!1}else te?(de&&e.texStorage2D(n.TEXTURE_2D,Pt,Dt,dt.width,dt.height),V&&et(y,dt,Ct,Kt)):e.texImage2D(n.TEXTURE_2D,0,Dt,dt.width,dt.height,0,Ct,Kt,dt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){te&&de&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Pt,Dt,jt[0].width,jt[0].height,dt.depth);for(let ct=0,Et=jt.length;ct<Et;ct++)if(Lt=jt[ct],y.format!==Kn)if(Ct!==null)if(te){if(V)if(y.layerUpdates.size>0){let Nt=Qh(Lt.width,Lt.height,y.format,y.type);for(let xt of y.layerUpdates){let Jt=Lt.data.subarray(xt*Nt/Lt.data.BYTES_PER_ELEMENT,(xt+1)*Nt/Lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,xt,Lt.width,Lt.height,1,Ct,Jt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,Lt.width,Lt.height,dt.depth,Ct,Lt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ct,Dt,Lt.width,Lt.height,dt.depth,0,Lt.data,0,0);else ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?V&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,Lt.width,Lt.height,dt.depth,Ct,Kt,Lt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ct,Dt,Lt.width,Lt.height,dt.depth,0,Ct,Kt,Lt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{te&&de&&e.texStorage2D(n.TEXTURE_2D,Pt,Dt,jt[0].width,jt[0].height);for(let ct=0,Et=jt.length;ct<Et;ct++)Lt=jt[ct],y.format!==Kn?Ct!==null?te?V&&e.compressedTexSubImage2D(n.TEXTURE_2D,ct,0,0,Lt.width,Lt.height,Ct,Lt.data):e.compressedTexImage2D(n.TEXTURE_2D,ct,Dt,Lt.width,Lt.height,0,Lt.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?V&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,Lt.width,Lt.height,Ct,Kt,Lt.data):e.texImage2D(n.TEXTURE_2D,ct,Dt,Lt.width,Lt.height,0,Ct,Kt,Lt.data)}else if(y.isDataArrayTexture)if(te){if(de&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Pt,Dt,dt.width,dt.height,dt.depth),V)if(y.layerUpdates.size>0){let ct=Qh(dt.width,dt.height,y.format,y.type);for(let Et of y.layerUpdates){let Nt=dt.data.subarray(Et*ct/dt.data.BYTES_PER_ELEMENT,(Et+1)*ct/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Et,dt.width,dt.height,1,Ct,Kt,Nt)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Ct,Kt,dt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Dt,dt.width,dt.height,dt.depth,0,Ct,Kt,dt.data);else if(y.isData3DTexture)te?(de&&e.texStorage3D(n.TEXTURE_3D,Pt,Dt,dt.width,dt.height,dt.depth),V&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Ct,Kt,dt.data)):e.texImage3D(n.TEXTURE_3D,0,Dt,dt.width,dt.height,dt.depth,0,Ct,Kt,dt.data);else if(y.isFramebufferTexture){if(de)if(te)e.texStorage2D(n.TEXTURE_2D,Pt,Dt,dt.width,dt.height);else{let ct=dt.width,Et=dt.height;for(let Nt=0;Nt<Pt;Nt++)e.texImage2D(n.TEXTURE_2D,Nt,Dt,ct,Et,0,Ct,Kt,null),ct>>=1,Et>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){let ct=n.canvas;if(ct.hasAttribute("layoutsubtree")||ct.setAttribute("layoutsubtree","true"),dt.parentNode!==ct){ct.appendChild(dt),d.add(y),ct.onpaint=Et=>{let Nt=Et.changedElements;for(let xt of d)Nt.includes(xt.image)&&(xt.needsUpdate=!0)},ct.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,dt);else{let Nt=n.RGBA,xt=n.RGBA,Jt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Nt,xt,Jt,dt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(jt.length>0){if(te&&de){let ct=pe(jt[0]);e.texStorage2D(n.TEXTURE_2D,Pt,Dt,ct.width,ct.height)}for(let ct=0,Et=jt.length;ct<Et;ct++)Lt=jt[ct],te?V&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,Ct,Kt,Lt):e.texImage2D(n.TEXTURE_2D,ct,Dt,Ct,Kt,Lt);y.generateMipmaps=!1}else if(te){if(de){let ct=pe(dt);e.texStorage2D(n.TEXTURE_2D,Pt,Dt,ct.width,ct.height)}V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ct,Kt,dt)}else e.texImage2D(n.TEXTURE_2D,0,Dt,Ct,Kt,dt);x(y)&&C(tt),It.__version=At.version,y.onUpdate&&y.onUpdate(y)}F.__version=y.version}function zt(F,y,Y){if(y.image.length!==6)return;let tt=_t(F,y),at=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+Y);let At=i.get(at);if(at.version!==At.__version||tt===!0){e.activeTexture(n.TEXTURE0+Y);let It=Me.getPrimaries(Me.workingColorSpace),ht=y.colorSpace===Gi?null:Me.getPrimaries(y.colorSpace),dt=y.colorSpace===Gi||It===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Ct=y.isCompressedTexture||y.image[0].isCompressedTexture,Kt=y.image[0]&&y.image[0].isDataTexture,Dt=[];for(let xt=0;xt<6;xt++)!Ct&&!Kt?Dt[xt]=g(y.image[xt],!0,s.maxCubemapSize):Dt[xt]=Kt?y.image[xt].image:y.image[xt],Dt[xt]=He(y,Dt[xt]);let Lt=Dt[0],jt=r.convert(y.format,y.colorSpace),te=r.convert(y.type),de=T(y.internalFormat,jt,te,y.normalized,y.colorSpace),V=y.isVideoTexture!==!0,Pt=At.__version===void 0||tt===!0,ct=at.dataReady,Et=R(y,Lt);Tt(n.TEXTURE_CUBE_MAP,y);let Nt;if(Ct){V&&Pt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,de,Lt.width,Lt.height);for(let xt=0;xt<6;xt++){Nt=Dt[xt].mipmaps;for(let Jt=0;Jt<Nt.length;Jt++){let $t=Nt[Jt];y.format!==Kn?jt!==null?V?ct&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Jt,0,0,$t.width,$t.height,jt,$t.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Jt,de,$t.width,$t.height,0,$t.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Jt,0,0,$t.width,$t.height,jt,te,$t.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Jt,de,$t.width,$t.height,0,jt,te,$t.data)}}}else{if(Nt=y.mipmaps,V&&Pt){Nt.length>0&&Et++;let xt=pe(Dt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,de,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Kt){V?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Dt[xt].width,Dt[xt].height,jt,te,Dt[xt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,de,Dt[xt].width,Dt[xt].height,0,jt,te,Dt[xt].data);for(let Jt=0;Jt<Nt.length;Jt++){let Ae=Nt[Jt].image[xt].image;V?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Jt+1,0,0,Ae.width,Ae.height,jt,te,Ae.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Jt+1,de,Ae.width,Ae.height,0,jt,te,Ae.data)}}else{V?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,jt,te,Dt[xt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,de,jt,te,Dt[xt]);for(let Jt=0;Jt<Nt.length;Jt++){let $t=Nt[Jt];V?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Jt+1,0,0,jt,te,$t.image[xt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Jt+1,de,jt,te,$t.image[xt])}}}x(y)&&C(n.TEXTURE_CUBE_MAP),At.__version=at.version,y.onUpdate&&y.onUpdate(y)}F.__version=y.version}function mt(F,y,Y,tt,at,At){let It=r.convert(Y.format,Y.colorSpace),ht=r.convert(Y.type),dt=T(Y.internalFormat,It,ht,Y.normalized,Y.colorSpace),Ct=i.get(y),Kt=i.get(Y);if(Kt.__renderTarget=y,!Ct.__hasExternalTextures){let Dt=Math.max(1,y.width>>At),Lt=Math.max(1,y.height>>At);at===n.TEXTURE_3D||at===n.TEXTURE_2D_ARRAY?e.texImage3D(at,At,dt,Dt,Lt,y.depth,0,It,ht,null):e.texImage2D(at,At,dt,Dt,Lt,0,It,ht,null)}e.bindFramebuffer(n.FRAMEBUFFER,F),Ne(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,at,Kt.__webglTexture,0,Ce(y)):(at===n.TEXTURE_2D||at>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,tt,at,Kt.__webglTexture,At),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Vt(F,y,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,F),y.depthBuffer){let tt=y.depthTexture,at=tt&&tt.isDepthTexture?tt.type:null,At=S(y.stencilBuffer,at),It=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ne(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce(y),At,y.width,y.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce(y),At,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,At,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,It,n.RENDERBUFFER,F)}else{let tt=y.textures;for(let at=0;at<tt.length;at++){let At=tt[at],It=r.convert(At.format,At.colorSpace),ht=r.convert(At.type),dt=T(At.internalFormat,It,ht,At.normalized,At.colorSpace);Ne(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce(y),dt,y.width,y.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce(y),dt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,dt,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function oe(F,y,Y){let tt=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,F),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let at=i.get(y.depthTexture);if(at.__renderTarget=y,(!at.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),tt){if(at.__webglInit===void 0&&(at.__webglInit=!0,y.depthTexture.addEventListener("dispose",N)),at.__webglTexture===void 0){at.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,at.__webglTexture),Tt(n.TEXTURE_CUBE_MAP,y.depthTexture);let Ct=r.convert(y.depthTexture.format),Kt=r.convert(y.depthTexture.type),Dt;y.depthTexture.format===wi?Dt=n.DEPTH_COMPONENT24:y.depthTexture.format===xs&&(Dt=n.DEPTH24_STENCIL8);for(let Lt=0;Lt<6;Lt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,Dt,y.width,y.height,0,Ct,Kt,null)}}else it(y.depthTexture,0);let At=at.__webglTexture,It=Ce(y),ht=tt?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,dt=y.depthTexture.format===xs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===wi)Ne(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,dt,ht,At,0,It):n.framebufferTexture2D(n.FRAMEBUFFER,dt,ht,At,0);else if(y.depthTexture.format===xs)Ne(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,dt,ht,At,0,It):n.framebufferTexture2D(n.FRAMEBUFFER,dt,ht,At,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ft(F){let y=i.get(F),Y=F.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==F.depthTexture){let tt=F.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),tt){let at=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,tt.removeEventListener("dispose",at)};tt.addEventListener("dispose",at),y.__depthDisposeCallback=at}y.__boundDepthTexture=tt}if(F.depthTexture&&!y.__autoAllocateDepthBuffer)if(Y)for(let tt=0;tt<6;tt++)oe(y.__webglFramebuffer[tt],F,tt);else{let tt=F.texture.mipmaps;tt&&tt.length>0?oe(y.__webglFramebuffer[0],F,0):oe(y.__webglFramebuffer,F,0)}else if(Y){y.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[tt]),y.__webglDepthbuffer[tt]===void 0)y.__webglDepthbuffer[tt]=n.createRenderbuffer(),Vt(y.__webglDepthbuffer[tt],F,!1);else{let at=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=y.__webglDepthbuffer[tt];n.bindRenderbuffer(n.RENDERBUFFER,At),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,At)}}else{let tt=F.texture.mipmaps;if(tt&&tt.length>0?e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Vt(y.__webglDepthbuffer,F,!1);else{let at=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,At),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,At)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ie(F,y,Y){let tt=i.get(F);y!==void 0&&mt(tt.__webglFramebuffer,F,F.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&ft(F)}function Zt(F){let y=F.texture,Y=i.get(F),tt=i.get(y);F.addEventListener("dispose",b);let at=F.textures,At=F.isWebGLCubeRenderTarget===!0,It=at.length>1;if(It||(tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture()),tt.__version=y.version,o.memory.textures++),At){Y.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(y.mipmaps&&y.mipmaps.length>0){Y.__webglFramebuffer[ht]=[];for(let dt=0;dt<y.mipmaps.length;dt++)Y.__webglFramebuffer[ht][dt]=n.createFramebuffer()}else Y.__webglFramebuffer[ht]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ht=0;ht<y.mipmaps.length;ht++)Y.__webglFramebuffer[ht]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(It)for(let ht=0,dt=at.length;ht<dt;ht++){let Ct=i.get(at[ht]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=n.createTexture(),o.memory.textures++)}if(F.samples>0&&Ne(F)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ht=0;ht<at.length;ht++){let dt=at[ht];Y.__webglColorRenderbuffer[ht]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[ht]);let Ct=r.convert(dt.format,dt.colorSpace),Kt=r.convert(dt.type),Dt=T(dt.internalFormat,Ct,Kt,dt.normalized,dt.colorSpace,F.isXRRenderTarget===!0),Lt=Ce(F);n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,Dt,F.width,F.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,Y.__webglColorRenderbuffer[ht])}n.bindRenderbuffer(n.RENDERBUFFER,null),F.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),Vt(Y.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(At){e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),Tt(n.TEXTURE_CUBE_MAP,y);for(let ht=0;ht<6;ht++)if(y.mipmaps&&y.mipmaps.length>0)for(let dt=0;dt<y.mipmaps.length;dt++)mt(Y.__webglFramebuffer[ht][dt],F,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,dt);else mt(Y.__webglFramebuffer[ht],F,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);x(y)&&C(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let ht=0,dt=at.length;ht<dt;ht++){let Ct=at[ht],Kt=i.get(Ct),Dt=n.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Dt=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Dt,Kt.__webglTexture),Tt(Dt,Ct),mt(Y.__webglFramebuffer,F,Ct,n.COLOR_ATTACHMENT0+ht,Dt,0),x(Ct)&&C(Dt)}e.unbindTexture()}else{let ht=n.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ht=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,tt.__webglTexture),Tt(ht,y),y.mipmaps&&y.mipmaps.length>0)for(let dt=0;dt<y.mipmaps.length;dt++)mt(Y.__webglFramebuffer[dt],F,y,n.COLOR_ATTACHMENT0,ht,dt);else mt(Y.__webglFramebuffer,F,y,n.COLOR_ATTACHMENT0,ht,0);x(y)&&C(ht),e.unbindTexture()}F.depthBuffer&&ft(F)}function Xt(F){let y=F.textures;for(let Y=0,tt=y.length;Y<tt;Y++){let at=y[Y];if(x(at)){let At=L(F),It=i.get(at).__webglTexture;e.bindTexture(At,It),C(At),e.unbindTexture()}}}let re=[],Ve=[];function De(F){if(F.samples>0){if(Ne(F)===!1){let y=F.textures,Y=F.width,tt=F.height,at=n.COLOR_BUFFER_BIT,At=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,It=i.get(F),ht=y.length>1;if(ht)for(let Ct=0;Ct<y.length;Ct++)e.bindFramebuffer(n.FRAMEBUFFER,It.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,It.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);let dt=F.texture.mipmaps;dt&&dt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Ct=0;Ct<y.length;Ct++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(at|=n.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(at|=n.STENCIL_BUFFER_BIT)),ht){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,It.__webglColorRenderbuffer[Ct]);let Kt=i.get(y[Ct]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Kt,0)}n.blitFramebuffer(0,0,Y,tt,0,0,Y,tt,at,n.NEAREST),c===!0&&(re.length=0,Ve.length=0,re.push(n.COLOR_ATTACHMENT0+Ct),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(re.push(At),Ve.push(At),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ve)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ht)for(let Ct=0;Ct<y.length;Ct++){e.bindFramebuffer(n.FRAMEBUFFER,It.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.RENDERBUFFER,It.__webglColorRenderbuffer[Ct]);let Kt=i.get(y[Ct]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,It.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.TEXTURE_2D,Kt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&c){let y=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Ce(F){return Math.min(s.maxSamples,F.samples)}function Ne(F){let y=i.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function H(F){let y=o.render.frame;p.get(F)!==y&&(p.set(F,y),F.update())}function He(F,y){let Y=F.colorSpace,tt=F.format,at=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Y!==Wr&&Y!==Gi&&(Me.getTransfer(Y)===Ue?(tt!==Kn||at!==zn)&&ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):le("WebGLTextures: Unsupported texture color space:",Y)),y}function pe(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(l.width=F.naturalWidth||F.width,l.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(l.width=F.displayWidth,l.height=F.displayHeight):(l.width=F.width,l.height=F.height),l}this.allocateTextureUnit=j,this.resetTextureUnits=z,this.getTextureUnits=O,this.setTextureUnits=k,this.setTexture2D=it,this.setTexture2DArray=J,this.setTexture3D=nt,this.setTextureCube=ot,this.rebindTextures=ie,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Ne,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function GM(n,t){function e(i,s=Gi){let r,o=Me.getTransfer(s);if(i===zn)return n.UNSIGNED_BYTE;if(i===gl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===xl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Hh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Gh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===kh)return n.BYTE;if(i===Vh)return n.SHORT;if(i===ur)return n.UNSIGNED_SHORT;if(i===ml)return n.INT;if(i===hi)return n.UNSIGNED_INT;if(i===ui)return n.FLOAT;if(i===fi)return n.HALF_FLOAT;if(i===Wh)return n.ALPHA;if(i===Xh)return n.RGB;if(i===Kn)return n.RGBA;if(i===wi)return n.DEPTH_COMPONENT;if(i===xs)return n.DEPTH_STENCIL;if(i===qh)return n.RED;if(i===_l)return n.RED_INTEGER;if(i===_s)return n.RG;if(i===yl)return n.RG_INTEGER;if(i===vl)return n.RGBA_INTEGER;if(i===po||i===mo||i===go||i===xo)if(o===Ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===go)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ml||i===bl||i===Sl||i===wl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Al||i===El||i===Tl||i===Cl||i===Rl||i===_o||i===Il)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Al||i===El)return o===Ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Tl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Cl)return r.COMPRESSED_R11_EAC;if(i===Rl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===_o)return r.COMPRESSED_RG11_EAC;if(i===Il)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Pl||i===Ll||i===Dl||i===Nl||i===Ul||i===Fl||i===Ol||i===Bl||i===zl||i===kl||i===Vl||i===Hl||i===Gl||i===Wl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Pl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ll)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ul)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ol)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xl||i===ql||i===Yl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Xl)return o===Ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ql)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$l||i===Zl||i===yo||i===Jl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===$l)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var WM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,_u=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new so(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Mn({vertexShader:WM,fragmentShader:XM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Fe(new oo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yu=class extends Ai{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,p=null,d=null,m=null,f=null,_=null,v=typeof XRWebGLBinding<"u",g=new _u,x={},C=e.getContextAttributes(),L=null,T=null,S=[],R=[],N=new _e,b=null,A=null,U=new yn;U.viewport=new $e;let B=new yn;B.viewport=new $e;let Z=[U,B],z=new hl,O=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=S[X];return et===void 0&&(et=new or,S[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=S[X];return et===void 0&&(et=new or,S[X]=et),et.getGripSpace()},this.getHand=function(X){let et=S[X];return et===void 0&&(et=new or,S[X]=et),et.getHandSpace()};function j(X){let et=R.indexOf(X.inputSource);if(et===-1)return;let ut=S[et];ut!==void 0&&(ut.update(X.inputSource,X.frame,l||o),ut.dispatchEvent({type:X.type,data:X.inputSource}))}function $(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",it);for(let X=0;X<S.length;X++){let et=R[X];et!==null&&(R[X]=null,S[X].disconnect(et))}O=null,k=null,g.reset();for(let X in x)delete x[X];if(t.setRenderTarget(L),f=null,m=null,d=null,s=null,T=null,_t.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(N.width,N.height,!1),A!==null){let X=A.camera;X.fov=A.fov,X.zoom=A.zoom,X.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return m!==null?m:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(L=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",$),s.addEventListener("inputsourceschange",it),C.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(N),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,zt=null,mt=null;C.depth&&(mt=C.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=C.stencil?xs:wi,zt=C.stencil?fr:hi);let Vt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};d=this.getBinding(),m=d.createProjectionLayer(Vt),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),T=new Ln(m.textureWidth,m.textureHeight,{format:Kn,type:zn,depthTexture:new hs(m.textureWidth,m.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let ut={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new Ln(f.framebufferWidth,f.framebufferHeight,{format:Kn,type:zn,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),_t.setContext(s),_t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function it(X){for(let et=0;et<X.removed.length;et++){let ut=X.removed[et],zt=R.indexOf(ut);zt>=0&&(R[zt]=null,S[zt].disconnect(ut))}for(let et=0;et<X.added.length;et++){let ut=X.added[et],zt=R.indexOf(ut);if(zt===-1){for(let Vt=0;Vt<S.length;Vt++)if(Vt>=R.length){R.push(ut),zt=Vt;break}else if(R[Vt]===null){R[Vt]=ut,zt=Vt;break}if(zt===-1)break}let mt=S[zt];mt&&mt.connect(ut)}}let J=new K,nt=new K;function ot(X,et,ut){J.setFromMatrixPosition(et.matrixWorld),nt.setFromMatrixPosition(ut.matrixWorld);let zt=J.distanceTo(nt),mt=et.projectionMatrix.elements,Vt=ut.projectionMatrix.elements,oe=mt[14]/(mt[10]-1),ft=mt[14]/(mt[10]+1),ie=(mt[9]+1)/mt[5],Zt=(mt[9]-1)/mt[5],Xt=(mt[8]-1)/mt[0],re=(Vt[8]+1)/Vt[0],Ve=oe*Xt,De=oe*re,Ce=zt/(-Xt+re),Ne=Ce*-Xt;if(et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ne),X.translateZ(Ce),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),mt[10]===-1)X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let H=oe+Ce,He=ft+Ce,pe=Ve-Ne,F=De+(zt-Ne),y=ie*ft/He*H,Y=Zt*ft/He*H;X.projectionMatrix.makePerspective(pe,F,y,Y,H,He),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Rt(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let et=X.near,ut=X.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(ut=g.depthFar)),z.near=B.near=U.near=et,z.far=B.far=U.far=ut,(O!==z.near||k!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),O=z.near,k=z.far),z.layers.mask=X.layers.mask|6,U.layers.mask=z.layers.mask&-5,B.layers.mask=z.layers.mask&-3;let zt=X.parent,mt=z.cameras;Rt(z,zt);for(let Vt=0;Vt<mt.length;Vt++)Rt(mt[Vt],zt);mt.length===2?ot(z,U,B):z.projectionMatrix.copy(U.projectionMatrix),A===null&&X.isPerspectiveCamera&&(A={camera:X,fov:X.fov,zoom:X.zoom}),gt(X,z,zt)};function gt(X,et,ut){ut===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(ut.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ka*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(m===null&&f===null))return c},this.setFoveation=function(X){c=X,m!==null&&(m.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(X){return x[X]};let St=null;function Tt(X,et){if(p=et.getViewerPose(l||o),_=et,p!==null){let ut=p.views;f!==null&&(t.setRenderTargetFramebuffer(T,f.framebuffer),t.setRenderTarget(T));let zt=!1;ut.length!==z.cameras.length&&(z.cameras.length=0,zt=!0);for(let ft=0;ft<ut.length;ft++){let ie=ut[ft],Zt=null;if(f!==null)Zt=f.getViewport(ie);else{let re=d.getViewSubImage(m,ie);Zt=re.viewport,ft===0&&(t.setRenderTargetTextures(T,re.colorTexture,re.depthStencilTexture),t.setRenderTarget(T))}let Xt=Z[ft];Xt===void 0&&(Xt=new yn,Xt.layers.enable(ft),Xt.viewport=new $e,Z[ft]=Xt),Xt.matrix.fromArray(ie.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(ie.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),ft===0&&(z.matrix.copy(Xt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),zt===!0&&z.cameras.push(Xt)}let mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();let ft=d.getDepthInformation(ut[0]);ft&&ft.isValid&&ft.texture&&g.init(ft,s.renderState)}if(mt&&mt.includes("camera-access")&&v){t.state.unbindTexture(),d=i.getBinding();for(let ft=0;ft<ut.length;ft++){let ie=ut[ft].camera;if(ie){let Zt=x[ie];Zt||(Zt=new so,x[ie]=Zt);let Xt=d.getCameraImage(ie);Zt.sourceTexture=Xt}}}}for(let ut=0;ut<S.length;ut++){let zt=R[ut],mt=S[ut];zt!==null&&mt!==void 0&&mt.update(zt,et,l||o)}St&&St(X,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),_=null}let _t=new Jp;_t.setAnimationLoop(Tt),this.setAnimationLoop=function(X){St=X},this.dispose=function(){}}},qM=new qe,nm=new fe;nm.set(-1,0,0,0,1,0,0,0,1);function YM(n,t){function e(g,x){g.matrixAutoUpdate===!0&&g.updateMatrix(),x.value.copy(g.matrix)}function i(g,x){x.color.getRGB(g.fogColor.value,Jh(n)),x.isFog?(g.fogNear.value=x.near,g.fogFar.value=x.far):x.isFogExp2&&(g.fogDensity.value=x.density)}function s(g,x,C,L,T){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(g,x):x.isMeshLambertMaterial?(r(g,x),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(g,x),d(g,x)):x.isMeshPhongMaterial?(r(g,x),p(g,x),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(g,x),m(g,x),x.isMeshPhysicalMaterial&&f(g,x,T)):x.isMeshMatcapMaterial?(r(g,x),_(g,x)):x.isMeshDepthMaterial?r(g,x):x.isMeshDistanceMaterial?(r(g,x),v(g,x)):x.isMeshNormalMaterial?r(g,x):x.isLineBasicMaterial?(o(g,x),x.isLineDashedMaterial&&a(g,x)):x.isPointsMaterial?c(g,x,C,L):x.isSpriteMaterial?l(g,x):x.isShadowMaterial?(g.color.value.copy(x.color),g.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(g,x){g.opacity.value=x.opacity,x.color&&g.diffuse.value.copy(x.color),x.emissive&&g.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(g.map.value=x.map,e(x.map,g.mapTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,e(x.alphaMap,g.alphaMapTransform)),x.bumpMap&&(g.bumpMap.value=x.bumpMap,e(x.bumpMap,g.bumpMapTransform),g.bumpScale.value=x.bumpScale,x.side===Rn&&(g.bumpScale.value*=-1)),x.normalMap&&(g.normalMap.value=x.normalMap,e(x.normalMap,g.normalMapTransform),g.normalScale.value.copy(x.normalScale),x.side===Rn&&g.normalScale.value.negate()),x.displacementMap&&(g.displacementMap.value=x.displacementMap,e(x.displacementMap,g.displacementMapTransform),g.displacementScale.value=x.displacementScale,g.displacementBias.value=x.displacementBias),x.emissiveMap&&(g.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,g.emissiveMapTransform)),x.specularMap&&(g.specularMap.value=x.specularMap,e(x.specularMap,g.specularMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest);let C=t.get(x),L=C.envMap,T=C.envMapRotation;L&&(g.envMap.value=L,g.envMapRotation.value.setFromMatrix4(qM.makeRotationFromEuler(T)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(nm),g.reflectivity.value=x.reflectivity,g.ior.value=x.ior,g.refractionRatio.value=x.refractionRatio),x.lightMap&&(g.lightMap.value=x.lightMap,g.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,g.lightMapTransform)),x.aoMap&&(g.aoMap.value=x.aoMap,g.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,g.aoMapTransform))}function o(g,x){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,x.map&&(g.map.value=x.map,e(x.map,g.mapTransform))}function a(g,x){g.dashSize.value=x.dashSize,g.totalSize.value=x.dashSize+x.gapSize,g.scale.value=x.scale}function c(g,x,C,L){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,g.size.value=x.size*C,g.scale.value=L*.5,x.map&&(g.map.value=x.map,e(x.map,g.uvTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,e(x.alphaMap,g.alphaMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest)}function l(g,x){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,g.rotation.value=x.rotation,x.map&&(g.map.value=x.map,e(x.map,g.mapTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,e(x.alphaMap,g.alphaMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest)}function p(g,x){g.specular.value.copy(x.specular),g.shininess.value=Math.max(x.shininess,1e-4)}function d(g,x){x.gradientMap&&(g.gradientMap.value=x.gradientMap)}function m(g,x){g.metalness.value=x.metalness,x.metalnessMap&&(g.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,g.metalnessMapTransform)),g.roughness.value=x.roughness,x.roughnessMap&&(g.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,g.roughnessMapTransform)),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)}function f(g,x,C){g.ior.value=x.ior,x.sheen>0&&(g.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),g.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(g.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,g.sheenColorMapTransform)),x.sheenRoughnessMap&&(g.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,g.sheenRoughnessMapTransform))),x.clearcoat>0&&(g.clearcoat.value=x.clearcoat,g.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(g.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,g.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(g.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Rn&&g.clearcoatNormalScale.value.negate())),x.dispersion>0&&(g.dispersion.value=x.dispersion),x.retroreflectivity>0&&(g.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(g.iridescence.value=x.iridescence,g.iridescenceIOR.value=x.iridescenceIOR,g.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(g.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,g.iridescenceMapTransform)),x.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),x.transmission>0&&(g.transmission.value=x.transmission,g.transmissionSamplerMap.value=C.texture,g.transmissionSamplerSize.value.set(C.width,C.height),x.transmissionMap&&(g.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,g.transmissionMapTransform)),g.thickness.value=x.thickness,x.thicknessMap&&(g.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=x.attenuationDistance,g.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(g.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(g.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=x.specularIntensity,g.specularColor.value.copy(x.specularColor),x.specularColorMap&&(g.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,g.specularColorMapTransform)),x.specularIntensityMap&&(g.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,x){x.matcap&&(g.matcap.value=x.matcap)}function v(g,x){let C=t.get(x).light;g.referencePosition.value.setFromMatrixPosition(C.matrixWorld),g.nearDistance.value=C.shadow.camera.near,g.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function $M(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,S){let R=S.program;i.uniformBlockBinding(T,R)}function l(T,S){let R=s[T.id];R===void 0&&(g(T),R=p(T),s[T.id]=R,T.addEventListener("dispose",C));let N=S.program;i.updateUBOMapping(T,N);let b=t.render.frame;r[T.id]!==b&&(m(T),r[T.id]=b)}function p(T){let S=d();T.__bindingPointIndex=S;let R=n.createBuffer(),N=T.__size,b=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,N,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,R),R}function d(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(T){let S=s[T.id],R=T.uniforms,N=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let b=0,A=R.length;b<A;b++){let U=R[b];if(Array.isArray(U))for(let B=0,Z=U.length;B<Z;B++)f(U[B],b,B,N);else f(U,b,0,N)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(T,S,R,N){if(v(T,S,R,N)===!0){let b=T.__offset,A=T.value;if(Array.isArray(A)){let U=0;for(let B=0;B<A.length;B++){let Z=A[B],z=x(Z);_(Z,T.__data,U),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(U+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(A,T.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,b,T.__data)}}function _(T,S,R){typeof T=="number"||typeof T=="boolean"?S[0]=T:T.isMatrix3?(S[0]=T.elements[0],S[1]=T.elements[1],S[2]=T.elements[2],S[3]=0,S[4]=T.elements[3],S[5]=T.elements[4],S[6]=T.elements[5],S[7]=0,S[8]=T.elements[6],S[9]=T.elements[7],S[10]=T.elements[8],S[11]=0):ArrayBuffer.isView(T)?S.set(new T.constructor(T.buffer,T.byteOffset,S.length)):T.toArray(S,R)}function v(T,S,R,N){let b=T.value,A=S+"_"+R;if(N[A]===void 0)return typeof b=="number"||typeof b=="boolean"?N[A]=b:ArrayBuffer.isView(b)?N[A]=b.slice():N[A]=b.clone(),!0;{let U=N[A];if(typeof b=="number"||typeof b=="boolean"){if(U!==b)return N[A]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(U.equals(b)===!1)return U.copy(b),!0}}return!1}function g(T){let S=T.uniforms,R=0,N=16;for(let A=0,U=S.length;A<U;A++){let B=Array.isArray(S[A])?S[A]:[S[A]];for(let Z=0,z=B.length;Z<z;Z++){let O=B[Z],k=Array.isArray(O.value)?O.value:[O.value];for(let j=0,$=k.length;j<$;j++){let it=k[j],J=x(it),nt=R%N,ot=nt%J.boundary,Rt=nt+ot;R+=ot,Rt!==0&&N-Rt<J.storage&&(R+=N-Rt),O.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=R,R+=J.storage}}}let b=R%N;return b>0&&(R+=N-b),T.__size=R,T.__cache={},this}function x(T){let S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(S.boundary=16,S.storage=T.byteLength):ae("WebGLRenderer: Unsupported uniform value type.",T),S}function C(T){let S=T.target;S.removeEventListener("dispose",C);let R=o.indexOf(S.__bindingPointIndex);o.splice(R,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function L(){for(let T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:c,update:l,dispose:L}}var ZM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ri=null;function JM(){return Ri===null&&(Ri=new Xa(ZM,16,16,_s,fi),Ri.name="DFG_LUT",Ri.minFilter=rn,Ri.magFilter=rn,Ri.wrapS=Si,Ri.wrapT=Si,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}var ic=class{constructor(t={}){let{canvas:e=vp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:m=!1,outputBufferType:f=zn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;let v=f,g=new Set([vl,yl,_l]),x=new Set([zn,hi,ur,fr,gl,xl]),C=new Uint32Array(4),L=new Int32Array(4),T=new K,S=null,R=null,N=[],b=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let U=this,B=!1,Z=null,z=null,O=null,k=null;this._outputColorSpace=sn;let j=0,$=0,it=null,J=-1,nt=null,ot=new $e,Rt=new $e,gt=null,St=new ce(0),Tt=0,_t=e.width,X=e.height,et=1,ut=null,zt=null,mt=new $e(0,0,_t,X),Vt=new $e(0,0,_t,X),oe=!1,ft=new eo,ie=!1,Zt=!1,Xt=new qe,re=new K,Ve=new $e,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ce=!1;function Ne(){return it===null?et:1}let H=i;function He(w,G){return e.getContext(w,G)}let pe,F,y,Y,tt,at,At,It,ht,dt,Ct,Kt,Dt,Lt,jt,te,de,V,Pt,ct,Et,Nt,xt;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:p,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",In,!1),H===null){let G="webgl2";if(H=He(G,w),H===null)throw He(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Jt()}catch(w){throw e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",In,!1),le("WebGLRenderer: "+w.message),w}function Jt(){pe=new iv(H),pe.init(),Et=new GM(H,pe),F=new Yy(H,pe,t,Et),y=new VM(H,pe),F.reversedDepthBuffer&&m&&y.buffers.depth.setReversed(!0),z=H.createFramebuffer(),O=H.createFramebuffer(),k=H.createFramebuffer(),Y=new ov(H),tt=new TM,at=new HM(H,pe,y,tt,F,Et,Y),At=new nv(U),It=new lx(H),Nt=new Xy(H,It),ht=new sv(H,It,Y,Nt),dt=new lv(H,ht,It,Nt,Y),V=new av(H,F,at),jt=new $y(tt),Ct=new EM(U,At,pe,F,Nt,jt),Kt=new YM(U,tt),Dt=new RM,Lt=new UM(pe),de=new Wy(U,At,y,dt,_,c),te=new kM(U,dt,F),xt=new $M(H,Y,F,y),Pt=new qy(H,pe,Y),ct=new rv(H,pe,Y),Y.programs=Ct.programs,U.capabilities=F,U.extensions=pe,U.properties=tt,U.renderLists=Dt,U.shadowMap=te,U.state=y,U.info=Y}v!==zn&&(A=new hv(v,e.width,e.height,a,s,r));let $t=new yu(U,H);this.xr=$t,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let w=pe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=pe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(w){w!==void 0&&(et=w,this.setSize(_t,X,!1))},this.getSize=function(w){return w.set(_t,X)},this.setSize=function(w,G,st=!0){if($t.isPresenting){ae("WebGLRenderer: Can't change size while VR device is presenting.");return}_t=w,X=G,e.width=Math.floor(w*et),e.height=Math.floor(G*et),st===!0&&(e.style.width=w+"px",e.style.height=G+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(_t*et,X*et).floor()},this.setDrawingBufferSize=function(w,G,st){_t=w,X=G,et=st,e.width=Math.floor(w*st),e.height=Math.floor(G*st),this.setViewport(0,0,w,G)},this.setEffects=function(w){if(v===zn){le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let G=0;G<w.length;G++)if(w[G].isOutputPass===!0){ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ot)},this.getViewport=function(w){return w.copy(mt)},this.setViewport=function(w,G,st,q){w.isVector4?mt.set(w.x,w.y,w.z,w.w):mt.set(w,G,st,q),y.viewport(ot.copy(mt).multiplyScalar(et).round())},this.getScissor=function(w){return w.copy(Vt)},this.setScissor=function(w,G,st,q){w.isVector4?Vt.set(w.x,w.y,w.z,w.w):Vt.set(w,G,st,q),y.scissor(Rt.copy(Vt).multiplyScalar(et).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(w){y.setScissorTest(oe=w)},this.setOpaqueSort=function(w){ut=w},this.setTransparentSort=function(w){zt=w},this.getClearColor=function(w){return w.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,st=!0){let q=0;if(w){let Q=!1;if(it!==null){let Ft=it.texture.format;Q=g.has(Ft)}if(Q){let Ft=it.texture.type,Gt=x.has(Ft),Ut=de.getClearColor(),Ht=de.getClearAlpha(),Yt=Ut.r,ue=Ut.g,me=Ut.b;Gt?(C[0]=Yt,C[1]=ue,C[2]=me,C[3]=Ht,H.clearBufferuiv(H.COLOR,0,C)):(L[0]=Yt,L[1]=ue,L[2]=me,L[3]=Ht,H.clearBufferiv(H.COLOR,0,L))}else q|=H.COLOR_BUFFER_BIT}G&&(q|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),st&&(q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&H.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),Z=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",In,!1),de.dispose(),Dt.dispose(),Lt.dispose(),tt.dispose(),At.dispose(),dt.dispose(),Nt.dispose(),xt.dispose(),Ct.dispose(),$t.dispose(),$t.removeEventListener("sessionstart",Zi),$t.removeEventListener("sessionend",vt),wt.stop()};function Ae(w){w.preventDefault(),$r("WebGLRenderer: Context Lost."),B=!0}function we(){$r("WebGLRenderer: Context Restored."),B=!1;let w=Y.autoReset,G=te.enabled,st=te.autoUpdate,q=te.needsUpdate,Q=te.type;Jt(),Y.autoReset=w,te.enabled=G,te.autoUpdate=st,te.needsUpdate=q,te.type=Q}function In(w){le("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Gn(w){let G=w.target;G.removeEventListener("dispose",Gn),Lc(G)}function Lc(w){Ms(w),tt.remove(w)}function Ms(w){let G=tt.get(w).programs;G!==void 0&&(G.forEach(function(st){Ct.releaseProgram(st)}),w.isShaderMaterial&&Ct.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,st,q,Q,Ft){G===null&&(G=De);let Gt=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Ut=Xo(w,G,st,q,Q);y.setMaterial(q,Gt);let Ht=st.index,Yt=1;if(q.wireframe===!0){if(Ht=ht.getWireframeAttribute(st),Ht===void 0)return;Yt=2}let ue=st.drawRange,me=st.attributes.position,qt=ue.start*Yt,ye=(ue.start+ue.count)*Yt;Ft!==null&&(qt=Math.max(qt,Ft.start*Yt),ye=Math.min(ye,(Ft.start+Ft.count)*Yt)),Ht!==null?(qt=Math.max(qt,0),ye=Math.min(ye,Ht.count)):me!=null&&(qt=Math.max(qt,0),ye=Math.min(ye,me.count));let Ze=ye-qt;if(Ze<0||Ze===1/0)return;Nt.setup(Q,q,Ut,st,Ht);let ke,Re=Pt;if(Ht!==null&&(ke=It.get(Ht),Re=ct,Re.setIndex(ke)),Q.isMesh)q.wireframe===!0?(y.setLineWidth(q.wireframeLinewidth*Ne()),Re.setMode(H.LINES)):Re.setMode(H.TRIANGLES);else if(Q.isLine){let Qe=q.linewidth;Qe===void 0&&(Qe=1),y.setLineWidth(Qe*Ne()),Q.isLineSegments?Re.setMode(H.LINES):Q.isLineLoop?Re.setMode(H.LINE_LOOP):Re.setMode(H.LINE_STRIP)}else Q.isPoints?Re.setMode(H.POINTS):Q.isSprite&&Re.setMode(H.TRIANGLES);if(Q.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))Re.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let Qe=Q._multiDrawStarts,kt=Q._multiDrawCounts,fn=Q._multiDrawCount,ve=Ht?It.get(Ht).bytesPerElement:1,Pn=tt.get(q).currentProgram.getUniforms();for(let An=0;An<fn;An++)Pn.setValue(H,"_gl_DrawID",An),Re.render(Qe[An]/ve,kt[An])}else if(Q.isInstancedMesh)Re.renderInstances(qt,Ze,Q.count);else if(st.isInstancedBufferGeometry){let Qe=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,kt=Math.min(st.instanceCount,Qe);Re.renderInstances(qt,Ze,kt)}else Re.render(qt,Ze)};function Tr(w,G,st,q){Z!==null&&w.isNodeMaterial&&Z.setObject(q,w),ie===!0&&jt.setState(w,st,!1),w.transparent===!0&&w.side===Jn&&w.forceSinglePass===!1?(w.side=Rn,w.needsUpdate=!0,Ji(w,G,q),w.side=ps,w.needsUpdate=!0,Ji(w,G,q),w.side=Jn):Ji(w,G,q)}this.compile=function(w,G,st=null){st===null&&(st=w),Z!==null&&Z.renderStart(w,G,st),R=Lt.get(st),R.init(G),b.push(R),st.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(R.pushLight(Q),Q.castShadow&&R.pushShadow(Q))}),w!==st&&w.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(R.pushLight(Q),Q.castShadow&&R.pushShadow(Q))}),R.setupLights(),Z!==null&&Z.updateLights(R.state.lightsArray),Zt=this.localClippingEnabled,ie=jt.init(this.clippingPlanes,Zt),ie===!0&&jt.setGlobalState(this.clippingPlanes,G),Z!==null&&te.render(R.state.shadowsArray,st,G);let q=new Set;return w.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Ft=Q.material;if(Ft)if(Array.isArray(Ft))for(let Gt=0;Gt<Ft.length;Gt++){let Ut=Ft[Gt];Tr(Ut,st,G,Q),q.add(Ut)}else Tr(Ft,st,G,Q),q.add(Ft)}),R=b.pop(),Z!==null&&Z.renderEnd(),q},this.compileAsync=function(w,G,st=null){let q=this.compile(w,G,st);return new Promise(Q=>{function Ft(){if(q.forEach(function(Gt){let Ht=tt.get(Gt).currentProgram;(Ht===void 0||Ht.isReady())&&q.delete(Gt)}),q.size===0){Q(w);return}setTimeout(Ft,10)}pe.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let bs=null;function ei(w){bs&&bs(w)}function Zi(){wt.stop()}function vt(){wt.start()}let wt=new Jp;wt.setAnimationLoop(ei),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(w){bs=w,$t.setAnimationLoop(w),w===null?wt.stop():wt.start()},$t.addEventListener("sessionstart",Zi),$t.addEventListener("sessionend",vt),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;Z!==null&&Z.renderStart(w,G);let st=$t.enabled===!0&&$t.isPresenting===!0,q=A!==null&&(it===null||st)&&A.begin(U,it);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),$t.enabled===!0&&$t.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&($t.cameraAutoUpdate===!0&&$t.updateCamera(G),G=$t.getCamera()),w.isScene===!0&&w.onBeforeRender(U,w,G,it),R=Lt.get(w,b.length),R.init(G),R.state.textureUnits=at.getTextureUnits(),b.push(R),Xt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ft.setFromProjectionMatrix(Xt,li,G.reversedDepth),Zt=this.localClippingEnabled,ie=jt.init(this.clippingPlanes,Zt),S=Dt.get(w,N.length),S.init(),N.push(S),$t.enabled===!0&&$t.isPresenting===!0){let Gt=U.xr.getDepthSensingMesh();Gt!==null&&Cr(Gt,G,-1/0,U.sortObjects)}Cr(w,G,0,U.sortObjects),S.finish(),Z!==null&&Z.updateLights(R.state.lightsArray),U.sortObjects===!0&&S.sort(ut,zt),Ce=$t.enabled===!1||$t.isPresenting===!1||$t.hasDepthSensing()===!1,Ce&&de.addToRenderList(S,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ie===!0&&jt.beginShadows();let Q=R.state.shadowsArray;if(te.render(Q,w,G),ie===!0&&jt.endShadows(),(q&&A.hasRenderPass())===!1){let Gt=S.opaque,Ut=S.transmissive;if(R.setupLights(),G.isArrayCamera){let Ht=G.cameras;if(Ut.length>0)for(let Yt=0,ue=Ht.length;Yt<ue;Yt++){let me=Ht[Yt];Ui(Gt,Ut,w,me)}Ce&&de.render(w);for(let Yt=0,ue=Ht.length;Yt<ue;Yt++){let me=Ht[Yt];Ee(S,w,me,me.viewport)}}else Ut.length>0&&Ui(Gt,Ut,w,G),Ce&&de.render(w),Ee(S,w,G)}it!==null&&$===0&&(at.updateMultisampleRenderTarget(it),at.updateRenderTargetMipmap(it)),q&&A.end(U),w.isScene===!0&&w.onAfterRender(U,w,G),Nt.resetDefaultState(),J=-1,nt=null,b.pop(),b.length>0?(R=b[b.length-1],at.setTextureUnits(R.state.textureUnits),ie===!0&&jt.setGlobalState(U.clippingPlanes,R.state.camera)):R=null,N.pop(),N.length>0?S=N[N.length-1]:S=null,Z!==null&&Z.renderEnd()};function Cr(w,G,st,q){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)st=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLightProbeGrid)R.pushLightProbeGrid(w);else if(w.isLight)R.pushLight(w),w.castShadow&&R.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(ft)){q&&Ve.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Xt);let Gt=dt.update(w),Ut=w.material;Ut.visible&&S.push(w,Gt,Ut,st,Ve.z,null,G)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(ft))){let Gt=dt.update(w),Ut=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ve.copy(w.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),Ve.copy(Gt.boundingSphere.center)),Ve.applyMatrix4(w.matrixWorld).applyMatrix4(Xt)),Array.isArray(Ut)){let Ht=Gt.groups;for(let Yt=0,ue=Ht.length;Yt<ue;Yt++){let me=Ht[Yt],qt=Ut[me.materialIndex];qt&&qt.visible&&S.push(w,Gt,qt,st,Ve.z,me,G)}}else Ut.visible&&S.push(w,Gt,Ut,st,Ve.z,null,G)}}let Ft=w.children;for(let Gt=0,Ut=Ft.length;Gt<Ut;Gt++)Cr(Ft[Gt],G,st,q)}function Ee(w,G,st,q){let{opaque:Q,transmissive:Ft,transparent:Gt}=w;R.setupLightsView(st),ie===!0&&jt.setGlobalState(U.clippingPlanes,st),q&&y.viewport(ot.copy(q)),Q.length>0&&ni(Q,G,st),Ft.length>0&&ni(Ft,G,st),Gt.length>0&&ni(Gt,G,st),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Ui(w,G,st,q){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[q.id]===void 0){let qt=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[q.id]=new Ln(1,1,{generateMipmaps:!0,type:qt?fi:zn,minFilter:gs,samples:Math.max(4,F.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Me.workingColorSpace})}let Ft=R.state.transmissionRenderTarget[q.id],Gt=q.viewport||ot;Ft.setSize(Gt.z*U.transmissionResolutionScale,Gt.w*U.transmissionResolutionScale);let Ut=U.getRenderTarget(),Ht=U.getActiveCubeFace(),Yt=U.getActiveMipmapLevel();U.setRenderTarget(Ft),U.getClearColor(St),Tt=U.getClearAlpha(),Tt<1&&U.setClearColor(16777215,.5),U.clear(),Ce&&de.render(st);let ue=U.toneMapping;U.toneMapping=ci;let me=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),R.setupLightsView(q),ie===!0&&jt.setGlobalState(U.clippingPlanes,q),ni(w,st,q),at.updateMultisampleRenderTarget(Ft),at.updateRenderTargetMipmap(Ft),pe.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let ye=0,Ze=G.length;ye<Ze;ye++){let ke=G[ye],{object:Re,geometry:Qe,material:kt,group:fn}=ke;if(kt.side===Jn&&Re.layers.test(q.layers)){let ve=kt.side;kt.side=Rn,kt.needsUpdate=!0,Rr(Re,st,q,Qe,kt,fn),kt.side=ve,kt.needsUpdate=!0,qt=!0}}qt===!0&&(at.updateMultisampleRenderTarget(Ft),at.updateRenderTargetMipmap(Ft))}U.setRenderTarget(Ut,Ht,Yt),U.setClearColor(St,Tt),me!==void 0&&(q.viewport=me),U.toneMapping=ue}function ni(w,G,st){let q=G.isScene===!0?G.overrideMaterial:null;for(let Q=0,Ft=w.length;Q<Ft;Q++){let Gt=w[Q],{object:Ut,geometry:Ht,group:Yt}=Gt,ue=Gt.material;ue.allowOverride===!0&&q!==null&&(ue=q),Ut.layers.test(st.layers)&&Rr(Ut,G,st,Ht,ue,Yt)}}function Rr(w,G,st,q,Q,Ft){Z!==null&&Q.isNodeMaterial&&Z.setObject(w,Q),w.onBeforeRender(U,G,st,q,Q,Ft),w.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Q.onBeforeRender(U,G,st,q,w,Ft),Q.transparent===!0&&Q.side===Jn&&Q.forceSinglePass===!1?(Q.side=Rn,Q.needsUpdate=!0,U.renderBufferDirect(st,G,q,Q,w,Ft),Q.side=ps,Q.needsUpdate=!0,U.renderBufferDirect(st,G,q,Q,w,Ft),Q.side=Jn):U.renderBufferDirect(st,G,q,Q,w,Ft),w.onAfterRender(U,G,st,q,Q,Ft)}function Ji(w,G,st){G.isScene!==!0&&(G=De);let q=tt.get(w),Q=R.state.lights,Ft=R.state.shadowsArray,Gt=Q.state.version,Ut=Ct.getParameters(w,Q.state,Ft,G,st,R.state.lightProbeGridArray),Ht=Ct.getProgramCacheKey(Ut),Yt=q.programs;q.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?G.environment:null,q.fog=G.fog;let ue=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;q.envMap=At.get(w.envMap||q.environment,ue),q.envMapRotation=q.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,Yt===void 0&&(w.addEventListener("dispose",Gn),Yt=new Map,q.programs=Yt);let me=Yt.get(Ht);if(me!==void 0){if(q.currentProgram===me&&q.lightsStateVersion===Gt)return Wo(w,Ut),me}else Ut.uniforms=Ct.getUniforms(w),Z!==null&&w.isNodeMaterial&&Z.build(w,st,Ut),w.onBeforeCompile(Ut,U),me=Ct.acquireProgram(Ut,Ht),Yt.set(Ht,me),q.uniforms=Ut.uniforms;let qt=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(qt.clippingPlanes=jt.uniform),Wo(w,Ut),q.needsLights=qo(w),q.lightsStateVersion=Gt,q.needsLights&&(qt.ambientLightColor.value=Q.state.ambient,qt.lightProbe.value=Q.state.probe,qt.sunLights.value=Q.state.sun,qt.sunLightShadows.value=Q.state.sunShadow,qt.directionalLights.value=Q.state.directional,qt.directionalLightShadows.value=Q.state.directionalShadow,qt.spotLights.value=Q.state.spot,qt.spotLightShadows.value=Q.state.spotShadow,qt.rectAreaLights.value=Q.state.rectArea,qt.ltc_1.value=Q.state.rectAreaLTC1,qt.ltc_2.value=Q.state.rectAreaLTC2,qt.pointLights.value=Q.state.point,qt.pointLightShadows.value=Q.state.pointShadow,qt.hemisphereLights.value=Q.state.hemi,qt.sunShadowMatrix.value=Q.state.sunShadowMatrix,qt.sunShadowCascade.value=Q.state.sunShadowCascade,qt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,qt.spotLightMatrix.value=Q.state.spotLightMatrix,qt.spotLightMap.value=Q.state.spotLightMap,qt.pointShadowMatrix.value=Q.state.pointShadowMatrix),q.lightProbeGrid=R.state.lightProbeGridArray.length>0,q.currentProgram=me,q.uniformsList=null,me}function Go(w){if(w.uniformsList===null){let G=w.currentProgram.getUniforms();w.uniformsList=mr.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function Wo(w,G){let st=tt.get(w);st.outputColorSpace=G.outputColorSpace,st.batching=G.batching,st.batchingColor=G.batchingColor,st.instancing=G.instancing,st.instancingColor=G.instancingColor,st.instancingMorph=G.instancingMorph,st.skinning=G.skinning,st.morphTargets=G.morphTargets,st.morphNormals=G.morphNormals,st.morphColors=G.morphColors,st.morphTargetsCount=G.morphTargetsCount,st.numClippingPlanes=G.numClippingPlanes,st.numIntersection=G.numClipIntersection,st.vertexAlphas=G.vertexAlphas,st.vertexTangents=G.vertexTangents,st.toneMapping=G.toneMapping}function Dc(w,G){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;T.setFromMatrixPosition(G.matrixWorld);for(let st=0,q=w.length;st<q;st++){let Q=w[st];if(Q.texture!==null&&Q.boundingBox.containsPoint(T))return Q}return null}function Xo(w,G,st,q,Q){G.isScene!==!0&&(G=De),at.resetTextureUnits();let Ft=G.fog,Gt=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?G.environment:null,Ut=it===null?U.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Me.workingColorSpace,Ht=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Yt=At.get(q.envMap||Gt,Ht),ue=q.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,me=!!st.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),qt=!!st.morphAttributes.position,ye=!!st.morphAttributes.normal,Ze=!!st.morphAttributes.color,ke=ci;q.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ke=U.toneMapping);let Re=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Qe=Re!==void 0?Re.length:0,kt=tt.get(q),fn=R.state.lights;if(ie===!0&&(Zt===!0||w!==nt)){let Oe=w===nt&&q.id===J;jt.setState(q,w,Oe)}let ve=!1;q.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==fn.state.version||kt.outputColorSpace!==Ut||Q.isBatchedMesh&&kt.batching===!1||!Q.isBatchedMesh&&kt.batching===!0||Q.isBatchedMesh&&kt.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&kt.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&kt.instancing===!1||!Q.isInstancedMesh&&kt.instancing===!0||Q.isSkinnedMesh&&kt.skinning===!1||!Q.isSkinnedMesh&&kt.skinning===!0||Q.isInstancedMesh&&kt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&kt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&kt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&kt.instancingMorph===!1&&Q.morphTexture!==null||kt.envMap!==Yt||q.fog===!0&&kt.fog!==Ft||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==jt.numPlanes||kt.numIntersection!==jt.numIntersection)||kt.vertexAlphas!==ue||kt.vertexTangents!==me||kt.morphTargets!==qt||kt.morphNormals!==ye||kt.morphColors!==Ze||kt.toneMapping!==ke||kt.morphTargetsCount!==Qe||!!kt.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(ve=!0):(ve=!0,kt.__version=q.version);let Pn=kt.currentProgram;ve===!0&&(Pn=Ji(q,G,Q),Z&&q.isNodeMaterial&&Z.onUpdateProgram(q,Pn,kt));let An=!1,Un=!1,Fi=!1,Ie=Pn.getUniforms(),Ge=kt.uniforms;if(y.useProgram(Pn.program)&&(An=!0,Un=!0,Fi=!0),q.id!==J&&(J=q.id,Un=!0),kt.needsLights){let Oe=Dc(R.state.lightProbeGridArray,Q);kt.lightProbeGrid!==Oe&&(kt.lightProbeGrid=Oe,Un=!0)}if(An||nt!==w){y.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ie.setValue(H,"projectionMatrix",w.projectionMatrix),Ie.setValue(H,"viewMatrix",w.matrixWorldInverse);let Wn=Ie.map.cameraPosition;Wn!==void 0&&Wn.setValue(H,re.setFromMatrixPosition(w.matrixWorld)),F.logarithmicDepthBuffer&&Ie.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ie.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),nt!==w&&(nt=w,Un=!0,Fi=!0)}if(kt.needsLights&&(fn.state.sunShadowMap.length>0&&Ie.setValue(H,"sunShadowMap",fn.state.sunShadowMap,at),fn.state.directionalShadowMap.length>0&&Ie.setValue(H,"directionalShadowMap",fn.state.directionalShadowMap,at),fn.state.spotShadowMap.length>0&&Ie.setValue(H,"spotShadowMap",fn.state.spotShadowMap,at),fn.state.pointShadowMap.length>0&&Ie.setValue(H,"pointShadowMap",fn.state.pointShadowMap,at)),Q.isSkinnedMesh){Ie.setOptional(H,Q,"bindMatrix"),Ie.setOptional(H,Q,"bindMatrixInverse");let Oe=Q.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),Ie.setValue(H,"boneTexture",Oe.boneTexture,at))}Q.isBatchedMesh&&(Ie.setOptional(H,Q,"batchingTexture"),Ie.setValue(H,"batchingTexture",Q._matricesTexture,at),Ie.setOptional(H,Q,"batchingIdTexture"),Ie.setValue(H,"batchingIdTexture",Q._indirectTexture,at),Ie.setOptional(H,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ie.setValue(H,"batchingColorTexture",Q._colorsTexture,at));let _i=st.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&V.update(Q,st,Pn),(Un||kt.receiveShadow!==Q.receiveShadow)&&(kt.receiveShadow=Q.receiveShadow,Ie.setValue(H,"receiveShadow",Q.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&G.environment!==null&&(Ge.envMapIntensity.value=G.environmentIntensity),Ge.dfgLUT!==void 0&&(Ge.dfgLUT.value=JM()),Un){if(Ie.setValue(H,"toneMappingExposure",U.toneMappingExposure),kt.needsLights&&Nn(Ge,Fi),Ft&&q.fog===!0&&Kt.refreshFogUniforms(Ge,Ft),Kt.refreshMaterialUniforms(Ge,q,et,X,R.state.transmissionRenderTarget[w.id]),kt.needsLights&&kt.lightProbeGrid){let Oe=kt.lightProbeGrid;Ge.probesSH.value=Oe.texture,Ge.probesMin.value.copy(Oe.boundingBox.min),Ge.probesMax.value.copy(Oe.boundingBox.max),Ge.probesResolution.value.copy(Oe.resolution)}mr.upload(H,Go(kt),Ge,at)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(mr.upload(H,Go(kt),Ge,at),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ie.setValue(H,"center",Q.center),Ie.setValue(H,"modelViewMatrix",Q.modelViewMatrix),Ie.setValue(H,"normalMatrix",Q.normalMatrix),Ie.setValue(H,"modelMatrix",Q.matrixWorld),q.uniformsGroups!==void 0){let Oe=q.uniformsGroups;for(let Wn=0,Xn=Oe.length;Wn<Xn;Wn++){let Yo=Oe[Wn];xt.update(Yo,Pn),xt.bind(Yo,Pn)}}return Pn}function Nn(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.sunLights.needsUpdate=G,w.sunLightShadows.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function qo(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(w,G,st){let q=tt.get(w);q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),tt.get(w.texture).__webglTexture=G,tt.get(w.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:st,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,G){let st=tt.get(w);st.__webglFramebuffer=G,st.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(w,G=0,st=0){it=w,j=G,$=st;let q=null,Q=!1,Ft=!1;if(w){let Ut=tt.get(w);if(Ut.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(H.FRAMEBUFFER,Ut.__webglFramebuffer),ot.copy(w.viewport),Rt.copy(w.scissor),gt=w.scissorTest,y.viewport(ot),y.scissor(Rt),y.setScissorTest(gt),J=-1;return}else if(Ut.__webglFramebuffer===void 0)at.setupRenderTarget(w);else if(Ut.__hasExternalTextures)at.rebindTextures(w,tt.get(w.texture).__webglTexture,tt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let ue=w.depthTexture;if(Ut.__boundDepthTexture!==ue){if(ue!==null&&tt.has(ue)&&(w.width!==ue.image.width||w.height!==ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(w)}}let Ht=w.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Ft=!0);let Yt=tt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Yt[G])?q=Yt[G][st]:q=Yt[G],Q=!0):w.samples>0&&at.useMultisampledRTT(w)===!1?q=tt.get(w).__webglMultisampledFramebuffer:Array.isArray(Yt)?q=Yt[st]:q=Yt,ot.copy(w.viewport),Rt.copy(w.scissor),gt=w.scissorTest}else ot.copy(mt).multiplyScalar(et).floor(),Rt.copy(Vt).multiplyScalar(et).floor(),gt=oe;if(st!==0&&(q=z),y.bindFramebuffer(H.FRAMEBUFFER,q)&&y.drawBuffers(w,q),y.viewport(ot),y.scissor(Rt),y.setScissorTest(gt),Q){let Ut=tt.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ut.__webglTexture,st)}else if(Ft){let Ut=G;for(let Ht=0;Ht<w.textures.length;Ht++){let Yt=tt.get(w.textures[Ht]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Ht,Yt.__webglTexture,st,Ut)}}else if(w!==null&&st!==0){let Ut=tt.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ut.__webglTexture,st)}J=-1};function Ki(w){let G=tt.get(w);return(G.__readFormat!==w.format||G.__readType!==w.type)&&(G.__readFormat=w.format,G.__readType=w.type,G.__formatReadable=F.textureFormatReadable(w.format),G.__typeReadable=F.textureTypeReadable(w.type)),G}this.readRenderTargetPixels=function(w,G,st,q,Q,Ft,Gt,Ut=0){if(!(w&&w.isWebGLRenderTarget)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Gt!==void 0&&(Ht=Ht[Gt]),Ht){y.bindFramebuffer(H.FRAMEBUFFER,Ht);try{let Yt=w.textures[Ut],ue=Yt.format,me=Yt.type;w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ut);let qt=Ki(Yt);if(qt.__formatReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qt.__typeReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-q&&st>=0&&st<=w.height-Q&&H.readPixels(G,st,q,Q,Et.convert(ue),Et.convert(me),Ft)}finally{let Yt=it!==null?tt.get(it).__webglFramebuffer:null;y.bindFramebuffer(H.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(w,G,st,q,Q,Ft,Gt,Ut=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Gt!==void 0&&(Ht=Ht[Gt]),Ht)if(G>=0&&G<=w.width-q&&st>=0&&st<=w.height-Q){y.bindFramebuffer(H.FRAMEBUFFER,Ht);let Yt=w.textures[Ut],ue=Yt.format,me=Yt.type;w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ut);let qt=Ki(Yt);if(qt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ye=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ye),H.bufferData(H.PIXEL_PACK_BUFFER,Ft.byteLength,H.STREAM_READ),H.readPixels(G,st,q,Q,Et.convert(ue),Et.convert(me),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let Ze=it!==null?tt.get(it).__webglFramebuffer:null;y.bindFramebuffer(H.FRAMEBUFFER,Ze);let ke=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await bp(H,ke,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ye),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ft),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(ye),H.deleteSync(ke),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,G=null,st=0){let q=Math.pow(2,-st),Q=Math.floor(w.image.width*q),Ft=Math.floor(w.image.height*q),Gt=G!==null?G.x:0,Ut=G!==null?G.y:0;at.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,st,0,0,Gt,Ut,Q,Ft),y.unbindTexture()},this.copyTextureToTexture=function(w,G,st=null,q=null,Q=0,Ft=0){let Gt,Ut,Ht,Yt,ue,me,qt,ye,Ze,ke=w.isCompressedTexture?w.mipmaps[Ft]:w.image;if(st!==null)Gt=st.max.x-st.min.x,Ut=st.max.y-st.min.y,Ht=st.isBox3?st.max.z-st.min.z:1,Yt=st.min.x,ue=st.min.y,me=st.isBox3?st.min.z:0;else{let Ge=Math.pow(2,-Q);Gt=Math.floor(ke.width*Ge),Ut=Math.floor(ke.height*Ge),w.isDataArrayTexture?Ht=ke.depth:w.isData3DTexture?Ht=Math.floor(ke.depth*Ge):Ht=1,Yt=0,ue=0,me=0}q!==null?(qt=q.x,ye=q.y,Ze=q.z):(qt=0,ye=0,Ze=0);let Re=Et.convert(G.format),Qe=Et.convert(G.type),kt;G.isData3DTexture?(at.setTexture3D(G,0),kt=H.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(at.setTexture2DArray(G,0),kt=H.TEXTURE_2D_ARRAY):(at.setTexture2D(G,0),kt=H.TEXTURE_2D),y.activeTexture(H.TEXTURE0),y.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,G.flipY),y.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),y.pixelStorei(H.UNPACK_ALIGNMENT,G.unpackAlignment);let fn=y.getParameter(H.UNPACK_ROW_LENGTH),ve=y.getParameter(H.UNPACK_IMAGE_HEIGHT),Pn=y.getParameter(H.UNPACK_SKIP_PIXELS),An=y.getParameter(H.UNPACK_SKIP_ROWS),Un=y.getParameter(H.UNPACK_SKIP_IMAGES);y.pixelStorei(H.UNPACK_ROW_LENGTH,ke.width),y.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ke.height),y.pixelStorei(H.UNPACK_SKIP_PIXELS,Yt),y.pixelStorei(H.UNPACK_SKIP_ROWS,ue),y.pixelStorei(H.UNPACK_SKIP_IMAGES,me);let Fi=w.isDataArrayTexture||w.isData3DTexture,Ie=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){let Ge=tt.get(w),_i=tt.get(G),Oe=tt.get(Ge.__renderTarget),Wn=tt.get(_i.__renderTarget);y.bindFramebuffer(H.READ_FRAMEBUFFER,Oe.__webglFramebuffer),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let Xn=0;Xn<Ht;Xn++)Fi&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,tt.get(w).__webglTexture,Q,me+Xn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,tt.get(G).__webglTexture,Ft,Ze+Xn)),H.blitFramebuffer(Yt,ue,Gt,Ut,qt,ye,Gt,Ut,H.DEPTH_BUFFER_BIT,H.NEAREST);y.bindFramebuffer(H.READ_FRAMEBUFFER,null),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Q!==0||w.isRenderTargetTexture||tt.has(w)){let Ge=tt.get(w),_i=tt.get(G);y.bindFramebuffer(H.READ_FRAMEBUFFER,O),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,k);for(let Oe=0;Oe<Ht;Oe++)Fi?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ge.__webglTexture,Q,me+Oe):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ge.__webglTexture,Q),Ie?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,_i.__webglTexture,Ft,Ze+Oe):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,_i.__webglTexture,Ft),Q!==0?H.blitFramebuffer(Yt,ue,Gt,Ut,qt,ye,Gt,Ut,H.COLOR_BUFFER_BIT,H.NEAREST):Ie?H.copyTexSubImage3D(kt,Ft,qt,ye,Ze+Oe,Yt,ue,Gt,Ut):H.copyTexSubImage2D(kt,Ft,qt,ye,Yt,ue,Gt,Ut);y.bindFramebuffer(H.READ_FRAMEBUFFER,null),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ie?w.isDataTexture||w.isData3DTexture?H.texSubImage3D(kt,Ft,qt,ye,Ze,Gt,Ut,Ht,Re,Qe,ke.data):G.isCompressedArrayTexture?H.compressedTexSubImage3D(kt,Ft,qt,ye,Ze,Gt,Ut,Ht,Re,ke.data):H.texSubImage3D(kt,Ft,qt,ye,Ze,Gt,Ut,Ht,Re,Qe,ke):w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ft,qt,ye,Gt,Ut,Re,Qe,ke.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ft,qt,ye,ke.width,ke.height,Re,ke.data):H.texSubImage2D(H.TEXTURE_2D,Ft,qt,ye,Gt,Ut,Re,Qe,ke);y.pixelStorei(H.UNPACK_ROW_LENGTH,fn),y.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ve),y.pixelStorei(H.UNPACK_SKIP_PIXELS,Pn),y.pixelStorei(H.UNPACK_SKIP_ROWS,An),y.pixelStorei(H.UNPACK_SKIP_IMAGES,Un),Ft===0&&G.generateMipmaps&&H.generateMipmap(kt),y.unbindTexture()},this.initRenderTarget=function(w){tt.get(w).__webglFramebuffer===void 0&&at.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?at.setTextureCube(w,0):w.isData3DTexture?at.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?at.setTexture2DArray(w,0):at.setTexture2D(w,0),y.unbindTexture()},this.resetState=function(){j=0,$=0,it=null,y.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Me._getDrawingBufferColorSpace(t),e.unpackColorSpace=Me._getUnpackColorSpace()}};var KM=["top","side","bottom"],jM={slab_bottom:1,slab_top:1,stairs:1},im=[[0,.5,0,1,1,.5],[.5,.5,0,1,1,1],[0,.5,.5,1,1,1],[0,.5,0,.5,1,1]];function QM(n){return!n||!n.shape?null:n.shape==="slab_bottom"?[[0,0,0,1,.5,1]]:n.shape==="slab_top"?[[0,.5,0,1,1,1]]:n.shape==="stairs"?[[0,0,0,1,.5,1],im[n.facing|0]]:null}function sm(n){let t=n&&n.blocks||[],e=n&&n.items||[],i=new Array(256).fill(null),s=Object.create(null),r=[];for(let A of t){if(!A||typeof A.id!="string")throw new Error("block without id");if(!Number.isInteger(A.n)||A.n<0||A.n>255)throw new Error("bad n for "+A.id);if(i[A.n])throw new Error("duplicate n "+A.n+" ("+A.id+")");if(s[A.id])throw new Error("duplicate id "+A.id);let U=A.colors||{},B=Object.assign({solid:!0,transparent:!1,liquid:!1,emissive:!1,hardness:1,drops:"self",buy:null,maxStack:64,pattern:"plain",kind:"block"},A);if(B.placeable=B.n!==0&&!B.liquid,B.colors={top:U.top||"#888888",side:U.side||U.top||"#888888",bottom:U.bottom||U.top||"#888888"},B.opaque=B.solid&&!B.transparent&&!B.cutout&&!jM[B.shape],B.tile={},B.tileOf&&s[B.tileOf])B.tile=Object.assign({},s[B.tileOf].tile);else if(B.n!==0){let Z={};for(let z of KM){let O=B.colors[z]+"|"+(B.pattern==="grass"||B.pattern==="log"||B.pattern==="lamp"||B.pattern==="table"||B.pattern==="stele"||B.pattern==="torch"||B.pattern==="bed"||B.pattern==="snow"||B.pattern==="lantern"||B.pattern==="bookshelf"||B.pattern==="hay"||B.pattern==="barrel"||B.pattern==="chest"||B.pattern==="farmland"?z:"");Z[O]===void 0&&(Z[O]=r.length,r.push({block:B.id,face:z,color:B.colors[z],pattern:B.pattern,accent:B.accent||null,top:B.colors.top})),B.tile[z]=Z[O]}}i[B.n]=B,s[B.id]=B}if(!s.air)throw new Error("registry needs air");for(let A of e){if(s[A.id])throw new Error("duplicate id "+A.id);s[A.id]=Object.assign({kind:"item",placeable:!1,maxStack:64,buy:null},A)}for(let A in s){let U=s[A].drops;if(U&&U!=="self"&&!s[U])throw new Error(A+" drops unknown "+U)}let o=A=>(typeof A=="number"?i[A]:s[A])||null,a=new Uint8Array(256),c=new Uint8Array(256),l=new Uint8Array(256),p=new Uint8Array(256),d=new Uint8Array(256),m=new Uint8Array(256),f={torch:1,cross:2,small:3,carpet:4,slab_bottom:5,slab_top:6,stairs:7,ramp:8},_=new Uint8Array(256),v=new Array(256).fill(null),g=new Uint8Array(256),x=new Uint8Array(256),C=new Uint8Array(256),L=new Uint8Array(256),T=new Uint8Array(256),S=new Int16Array(256).fill(-1),R=new Int16Array(256).fill(-1),N=new Int16Array(256).fill(-1);i.forEach((A,U)=>{A&&(g[U]=A.solid?1:0,x[U]=A.opaque?1:0,C[U]=A.transparent?1:0,L[U]=A.emissive?1:0,T[U]=A.liquid?1:0,a[U]=A.light!=null?A.light:A.emissive?15:0,c[U]=A.liquid?2:0,l[U]=f[A.shape]||0,p[U]=A.cutout?1:0,d[U]=A.climbable?1:0,m[U]=A.plant?1:0,_[U]=A.facing|0,A.solid&&(v[U]=QM(A)),U&&(S[U]=A.tile.top,R[U]=A.tile.side,N[U]=A.tile.bottom))});let b=(n&&n.blueprints||[]).map(A=>Object.assign({kind:"blueprint"},A));return{blocks:i.filter(Boolean),items:e.map(A=>s[A.id]),blueprints:b,tiles:r,get:o,toolOf:A=>{let U=A&&s[A];return U&&U.kind==="item"&&U.tool&&typeof U.tool=="object"?U.tool:null},num:A=>{let U=s[A];if(!U||U.kind!=="block")throw new Error("no block "+A);return U.n},name:A=>{let U=o(A);return U?U.name_zh:String(A)},maxStack:A=>{let U=s[A];return U?U.maxStack:64},dropOf:A=>{let U=i[A];return!U||!U.drops?null:U.drops==="self"?U.id:U.drops},breakTime:A=>{let U=i[A];return!U||U.hardness<0?1/0:.25+U.hardness*.55},flat:{solid:g,opaque:x,trans:C,emit:L,liquid:T,tileTop:S,tileSide:R,tileBottom:N,lightEmit:a,attn:c,shape:l,cutout:p,climb:d,plant:m,facing:_,boxes:v}}}var Wi=n=>Math.floor(n/16);var xe=(n,t,e)=>(t*16+e)*16+n;var Pi=(n,t)=>n+","+t,rm=n=>n.split(",").map(Number);function vu(n,t,e){if(n=Math.floor(n),t=Math.floor(t),e=Math.floor(e),t<0||t>=64)return null;let i=Wi(n),s=Wi(e);return{cx:i,cz:s,i:xe(n-i*16,t,e-s*16)}}function om(n,t,e){let i=[];for(let s=-e;s<=e;s++)for(let r=-e;r<=e;r++){let o=r*r+s*s;o<=e*e+e&&i.push({cx:n+r,cz:t+s,d2:o})}return i.sort((s,r)=>s.d2-r.d2)}function kn(n,t,e,i){let s=(n|0)^Math.imul(t|0,668265261)^Math.imul(e|0,374761393)^Math.imul(i|0,2654435761);return s=Math.imul(s^s>>>15,2246822507),s=Math.imul(s^s>>>13,3266489909),s^=s>>>16,(s>>>0)/4294967296}var xr=(n,t,e)=>kn(n,t,0,e);function tb(n){let t=n>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var Mu=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],eb=.5*(Math.sqrt(3)-1),So=(3-Math.sqrt(3))/6;function Li(n){let t=tb(n),e=new Uint8Array(256);for(let s=0;s<256;s++)e[s]=s;for(let s=255;s>0;s--){let r=Math.floor(t()*(s+1)),o=e[s];e[s]=e[r],e[r]=o}let i=new Uint8Array(512);for(let s=0;s<512;s++)i[s]=e[s&255];return function(s,r){let o=(s+r)*eb,a=Math.floor(s+o),c=Math.floor(r+o),l=(a+c)*So,p=s-(a-l),d=r-(c-l),m=p>d?1:0,f=1-m,_=p-m+So,v=d-f+So,g=p-1+2*So,x=d-1+2*So,C=a&255,L=c&255,T=0,S,R;return S=.5-p*p-d*d,S>0&&(R=Mu[i[C+i[L]]&7],S*=S,T+=S*S*(R[0]*p+R[1]*d)),S=.5-_*_-v*v,S>0&&(R=Mu[i[C+m+i[L+f]]&7],S*=S,T+=S*S*(R[0]*_+R[1]*v)),S=.5-g*g-x*x,S>0&&(R=Mu[i[C+1+i[L+1]]&7],S*=S,T+=S*S*(R[0]*g+R[1]*x)),70*T}}function Xi(n,t,e,i){let s=1,r=1,o=0,a=0;for(let c=0;c<i;c++)o+=s*n(t*r,e*r),a+=s,s*=.5,r*=2;return o/a}function bu(n){let t=e=>e*e*(3-2*e);return function(e,i,s){let r=Math.floor(e),o=Math.floor(i),a=Math.floor(s),c=t(e-r),l=t(i-o),p=t(s-a),d=(f,_,v)=>kn(n,r+f,o+_,a+v),m=(f,_,v)=>f+(_-f)*v;return m(m(m(d(0,0,0),d(1,0,0),c),m(d(0,1,0),d(1,1,0),c),l),m(m(d(0,0,1),d(1,0,1),c),m(d(0,1,1),d(1,1,1),c),l),p)}}var _r=160,di=18,Su=[[0,1],[-1,0],[0,-1],[1,0]];function am(n,t,e,i,s){return s===1?[i-1-t,n]:s===2?[e-1-n,i-1-t]:s===3?[t,e-1-n]:[n,t]}var nb=(n,t,e)=>e&1?[t,n]:[n,t];function lm(n,t,e){let i=new Map,s=t.SEA,r=e&&e.templates||{};function o(c,l){let p=c+","+l;if(i.has(p))return i.get(p);let d=null,m=f=>kn(n+909,c,f,l);if(m(0)<.45&&e&&e.houses&&e.houses.length){let f=Math.floor((c+.2+m(1)*.6)*_r),_=Math.floor((l+.2+m(2)*.6)*_r),v=t.biomeOf(f,_),g=t.height(f,_),x=(v==="plains"||v==="desert")&&Math.hypot(f,_)>110;if(x&&g>s+1)for(let C=0;C<16&&x;C++)for(let L of[7,14]){let T=t.height(f+Math.round(Math.cos(C*.39)*L),_+Math.round(Math.sin(C*.39)*L));(Math.abs(T-g)>3||T<=s)&&(x=!1)}else x=!1;if(x){let C=[],L=[],T=3+Math.floor(m(3)*4),S=(R,N,b,A)=>{let U=r[R];if(!U)return null;let[B,Z]=nb(U.size[0],U.size[2],A),z={tpl:R,rot:A,x0:N-(B>>1),z0:b-(Z>>1),y:g,w:B,d:Z,h:U.size[1]};return C.push(z),z};S("well",f,_,0),S("lamp_post",f+3,_+3,0),S("lamp_post",f-3,_-3,0);for(let R=0;R<T;R++){let N=R/T*Math.PI*2+m(10+R)*.5,b=9+m(20+R)*3,A=f+Math.round(Math.cos(N)*b),U=_+Math.round(Math.sin(N)*b),B=f-A,Z=_-U,z=0,O=-1/0;Su.forEach((ot,Rt)=>{let gt=ot[0]*B+ot[1]*Z;gt>O&&(O=gt,z=Rt)});let k=e.houses[Math.floor(m(30+R)*e.houses.length)],j=S(k,A,U,z);if(!j)continue;let $=r[k],[it,J]=am($.door[0],$.door[1],$.size[0],$.size[2],z),nt={x:j.x0+it+Su[z][0],z:j.z0+J+Su[z][1]};L.push({ax:f,az:_,bx:nt.x,bz:nt.z})}d={id:p,x:f,z:_,y:g,biome:v,structures:C,paths:L,villagers:2+Math.floor(m(4)*3)}}}return i.set(p,d),d}function a(c,l,p,d){let m=[];for(let f=Math.floor((l-di)/_r);f<=Math.floor((d+di)/_r);f++)for(let _=Math.floor((c-di)/_r);_<=Math.floor((p+di)/_r);_++){let v=o(_,f);v&&v.x+di>=c&&v.x-di<=p&&v.z+di>=l&&v.z-di<=d&&m.push(v)}return m}return{plan:o,around:a,chunk:(c,l)=>a(c*16,l*16,c*16+16-1,l*16+16-1)}}function cm(n,t,e,i,s,r,o){let a=t*16,c=e*16,l=(_,v)=>_>=a&&_<a+16&&v>=c&&v<c+16,p=i.biome==="desert",d=p?s.desert||{}:{},m=_=>{let v=s.palette[_];if(!v)return null;let g=d[v]||v;return r.byId(g)},f=p?r.byId("sandstone"):r.byId("cobblestone");for(let _ of i.paths){let v=Math.max(Math.abs(_.bx-_.ax),Math.abs(_.bz-_.az));for(let g=0;g<=v;g++){let x=Math.round(_.ax+(_.bx-_.ax)*g/v),C=Math.round(_.az+(_.bz-_.az)*g/v);if(!l(x,C))continue;let L=o.height(x,C),T=xe(x-a,L,C-c);n[T]&&n[T]!==r.water&&(n[T]=r.path);for(let S=L+1;S<Math.min(64,L+4);S++){let R=xe(x-a,S,C-c);(n[R]===r.leaves||n[R]===r.log||S===L+1)&&(n[R]=0)}}}for(let _ of i.structures){let v=s.templates[_.tpl];if(!v)continue;let[g,,x]=v.size;for(let C=0;C<x;C++)for(let L=0;L<g;L++){let[T,S]=am(L,C,g,x,_.rot),R=_.x0+T,N=_.z0+S;if(!l(R,N))continue;let b=R-a,A=N-c;for(let U=_.y-1;U>Math.max(0,_.y-8);U--){let B=xe(b,U,A);if(n[B]&&n[B]!==r.water)break;n[B]=f}for(let U=_.y+v.size[1];U<Math.min(64,_.y+v.size[1]+3);U++)n[xe(b,U,A)]=0;v.layers.forEach((U,B)=>{let Z=(U[C]||"")[L];if(!Z||Z===" ")return;let z=_.y+B;z>=64||(n[xe(b,z,A)]=Z==="."?0:m(Z)||0)})}}}var Dn=24;var um={shadow:"\u6697\u5F71\u754C",ocean:"\u6D77\u6D0B",plains:"\u8349\u539F",forest:"\u68EE\u6797",desert:"\u6C99\u6F20",snow:"\u96EA\u5730"},hm=[{ore:"coal",y0:5,y1:55,count:12,chance:1,size:7},{ore:"iron",y0:4,y1:40,count:8,chance:1,size:5},{ore:"gold",y0:3,y1:24,count:3,chance:.8,size:4},{ore:"diamond",y0:2,y1:13,count:2,chance:.6,size:3},{ore:"dark",y0:2,y1:11,count:2,chance:.5,size:3}],yr=112;function fm(n,t,e){let i=z=>t.num(z),s=z=>{try{return i(z)}catch{return 0}},r={air:0,grass:i("grass"),dirt:i("dirt"),stone:i("stone"),sand:i("sand"),water:i("water"),log:i("log"),leaves:i("leaves"),coal:i("coal_ore"),iron:i("iron_ore"),ruby:i("ruby_ore"),gold:i("gold_ore"),diamond:i("diamond_ore"),bedrock:i("bedrock"),stele:i("stele")};Object.assign(r,{portal:s("portal_forest"),sandstone:s("sandstone")||r.stone,cactus:s("cactus"),snow:s("snow")||r.grass,ice:s("ice")||r.water,slog:s("spruce_log")||r.log,sleaves:s("spruce_leaves")||r.leaves}),r.path=s("path")||r.dirt,r.byId=s,r.dark=s("dark_crystal_ore")||r.stone;let o=["flower_rose","flower_marigold","flower_dandelion","flower_hydrangea","flower_cornflower","flower_lavender","flower_peony"].map(s).filter(Boolean);Object.assign(r,{tallgrass:s("tallgrass"),fern:s("fern"),deadbush:s("deadbush"),mushR:s("mushroom_red"),mushB:s("mushroom_brown")});let a=Li(n),c=Li(n+101),l=Li(n+202),p=Li(n+303),d=Li(n+404),m=bu(n+505),f=bu(n+606);function _(z,O){let k=Xi(a,z/190,O/190,3),j=Xi(c,z/55,O/55,4),$=Math.max(0,Xi(l,z/130,O/130,2)-.1),it=27+k*9+j*6+$*$*75;return Math.max(4,Math.min(54,Math.floor(it)))}let v=Li(n+808);function g(z,O){let k=_(z,O),j=Xi(v,z/900,O/900,2),$=Math.min(1,Math.max(0,(Math.hypot(z,O)-240)/80)),it=Math.min(1,Math.max(0,(-.18-j)/.17)),J=it*it*(3-2*it)*$;return J>0&&(k=Math.round(k*(1-J)+(Dn-14)*J)),k<Dn-1?Math.max(3,Math.floor(Dn-1-(Dn-1-k)*1.8)):k}function x(z,O){let k=(xr(n+3,z,O)-.5)*.025;return{t:Xi(p,z/420,O/420,2)+k,u:Xi(d,z/380,O/380,2)-k}}function C(z,O,k=g(z,O)){if(k<Dn-1)return"ocean";let{t:j,u:$}=x(z,O);return j<-.3?"snow":j>.28&&$<.05?"desert":$>.12?"forest":"plains"}let L=null;function T(){if(L)return L;let z=(O,k)=>{let j=g(O,k);return j>=Dn+2&&Math.abs(g(O+1,k)-j)<2&&Math.abs(g(O,k+1)-j)<2};for(let O=0;O<400;O+=2)for(let k=0;k<Math.max(1,O*2);k++){let j=k/Math.max(1,O*2)*Math.PI*2,$=Math.round(Math.cos(j)*O),it=Math.round(Math.sin(j)*O);if(z($,it)&&z($+3,it+2))return L={x:$+.5,y:g($,it)+1,z:it+.5,stele:{x:$+3,y:g($+3,it+2)+1,z:it+2},portal:{x:$-3,y:Math.max(Dn+1,g($-3,it+2))+1,z:it+2}},L}return L={x:.5,y:60,z:.5,stele:{x:3,y:58,z:2}},L}function S(z,O){let k=[],j=z*16,$=O*16,it=Math.floor((j-80)/yr),J=Math.floor((j+16+80)/yr),nt=Math.floor(($-80)/yr),ot=Math.floor(($+16+80)/yr);for(let Rt=nt;Rt<=ot;Rt++)for(let gt=it;gt<=J;gt++){let St=ut=>kn(n+707,gt,ut,Rt);if(St(0)>.25)continue;let Tt=(gt+St(1))*yr,_t=(Rt+St(2))*yr,X=St(3)*Math.PI,et=40+St(4)*30;k.push({ax:Tt-Math.cos(X)*et/2,az:_t-Math.sin(X)*et/2,dx:Math.cos(X)*et,dz:Math.sin(X)*et,len:et,floor:7+Math.floor(St(5)*6),w:1.6+St(6)*1.2})}return k}function R(z,O){let k=new Uint8Array(16384),j=z*16,$=O*16,it=18,J=new Int16Array(it*it);for(let Tt=-1;Tt<=16;Tt++)for(let _t=-1;_t<=16;_t++)J[(Tt+1)*it+_t+1]=g(j+_t,$+Tt);let nt=T(),ot=new Array(256);for(let Tt=0;Tt<16;Tt++)for(let _t=0;_t<16;_t++){let X=j+_t,et=$+Tt,ut=J[(Tt+1)*it+_t+1],zt=Math.max(Math.abs(J[(Tt+1)*it+_t]-ut),Math.abs(J[(Tt+1)*it+_t+2]-ut),Math.abs(J[Tt*it+_t+1]-ut),Math.abs(J[(Tt+2)*it+_t+1]-ut))>=3,mt=ot[Tt*16+_t]=C(X,et,ut),Vt=ut<=Dn+1,oe,ft;mt==="ocean"||Vt||mt==="desert"?(oe=r.sand,ft=r.sand):zt?(oe=r.stone,ft=r.stone):mt==="snow"?(oe=r.snow,ft=r.dirt):(oe=r.grass,ft=r.dirt);for(let ie=0;ie<=ut;ie++){let Zt;if(ie===0?Zt=r.bedrock:ie===ut?Zt=oe:ie>=ut-3?Zt=ft:mt==="desert"&&ie>=ut-7?Zt=r.sandstone:Zt=r.stone,Zt===r.stone&&zt&&ie>=ut-4){let Xt=kn(n,X,ie,et);Xt<.06?Zt=r.coal:Xt<.09?Zt=r.iron:Xt<.096&&(Zt=r.ruby)}k[xe(_t,ie,Tt)]=Zt}for(let ie=ut+1;ie<=Dn;ie++)k[xe(_t,ie,Tt)]=ie===Dn&&mt==="snow"?r.ice:r.water}N(k,z,O,J,it);for(let Tt=0;Tt<hm.length;Tt++){let _t=hm[Tt],X=r[_t.ore];for(let et=0;et<_t.count;et++){let ut=oe=>kn(n+31*Tt+oe,z*977+et,oe,O*131+et);if(ut(9)>_t.chance)continue;let zt=Math.floor(ut(1)*16),mt=_t.y0+Math.floor(ut(2)*(_t.y1-_t.y0)),Vt=Math.floor(ut(3)*16);for(let oe=0;oe<_t.size;oe++){zt>=0&&zt<16&&Vt>=0&&Vt<16&&mt>0&&mt<64&&k[xe(zt,mt,Vt)]===r.stone&&(k[xe(zt,mt,Vt)]=X);let ft=Math.floor(ut(10+oe)*6);ft===0?zt++:ft===1?zt--:ft===2?mt++:ft===3?mt--:ft===4?Vt++:Vt--}}}let Rt=e?Z.chunk(z,O):[];b(k,z,O,J,it,ot,nt,Rt);for(let Tt of Rt)cm(k,z,O,Tt,e,r,B);let gt=nt.stele;if(Math.floor(gt.x/16)===z&&Math.floor(gt.z/16)===O){let Tt=gt.x-j,_t=gt.z-$;k[xe(Tt,gt.y,_t)]=r.stele,k[xe(Tt,gt.y+1,_t)]=r.stele}let St=nt.portal;if(r.portal&&St&&Math.floor(St.x/16)===z&&Math.floor(St.z/16)===O){let Tt=St.x-j,_t=St.z-$;for(let X=Math.max(1,St.y-3);X<St.y;X++)(!k[xe(Tt,X,_t)]||k[xe(Tt,X,_t)]===r.water)&&(k[xe(Tt,X,_t)]=r.stone);k[xe(Tt,St.y,_t)]=r.portal,k[xe(Tt,St.y+1,_t)]=r.portal}return k}function N(z,O,k,j,$){let it=O*16,J=k*16,nt=4,ot=16/nt+1,Rt=64/nt+1,gt=new Float32Array(ot*ot*Rt);for(let _t=0;_t<Rt;_t++)for(let X=0;X<ot;X++)for(let et=0;et<ot;et++){let ut=it+et*nt,zt=_t*nt,mt=J+X*nt,Vt=m(ut/22,zt/14,mt/22)-.5,oe=f(ut/22,zt/14,mt/22)-.5;gt[(_t*ot+X)*ot+et]=Vt*Vt+oe*oe}let St=(_t,X,et)=>gt[(X*ot+et)*ot+_t],Tt=S(O,k);for(let _t=0;_t<16;_t++)for(let X=0;X<16;X++){let et=j[(_t+1)*$+X+1],ut=et<=Dn+1,zt=ut?et-5:et,mt=X>>2,Vt=_t>>2,oe=(X&3)/nt,ft=(_t&3)/nt;for(let Xt=3;Xt<=zt;Xt++){let re=Xt>>2,Ve=(Xt&3)/nt,De=St(mt,re,Vt)+(St(mt+1,re,Vt)-St(mt,re,Vt))*oe,Ce=St(mt,re,Vt+1)+(St(mt+1,re,Vt+1)-St(mt,re,Vt+1))*oe,Ne=St(mt,re+1,Vt)+(St(mt+1,re+1,Vt)-St(mt,re+1,Vt))*oe,H=St(mt,re+1,Vt+1)+(St(mt+1,re+1,Vt+1)-St(mt,re+1,Vt+1))*oe;if((De+(Ce-De)*ft)*(1-Ve)+(Ne+(H-Ne)*ft)*Ve<.008){let pe=xe(X,Xt,_t);z[pe]!==r.bedrock&&z[pe]!==r.water&&(z[pe]=0)}}if(!Tt.length||ut)continue;let ie=it+X,Zt=J+_t;for(let Xt of Tt){let re=Math.max(0,Math.min(1,((ie-Xt.ax)*Xt.dx+(Zt-Xt.az)*Xt.dz)/(Xt.len*Xt.len))),Ve=Xt.ax+Xt.dx*re,De=Xt.az+Xt.dz*re,Ce=Math.hypot(ie-Ve,Zt-De),Ne=Xt.w*Math.sin(Math.PI*re);if(Ce<Ne)for(let H=Xt.floor+Math.floor(Ce*2);H<=et;H++){let He=xe(X,H,_t);z[He]!==r.water&&(z[He]=0)}}}}function b(z,O,k,j,$,it,J,nt){let ot=O*16,Rt=k*16;for(let gt=0;gt<16;gt++)for(let St=0;St<16;St++){let Tt=ot+St,_t=Rt+gt,X=j[(gt+1)*$+St+1],et=it[gt*16+St];if(X+1>=64||Math.hypot(Tt-J.x,_t-J.z)<48)continue;let ut=z[xe(St,X,gt)],zt=xe(St,X+1,gt);if(z[zt])continue;let mt=xr(n+11,Tt,_t),Vt=xr(n+13,Tt,_t);ut===r.grass?mt<.012&&o.length?z[zt]=o[Math.floor(Vt*o.length)]:mt<(et==="plains"?.1:.05)&&r.tallgrass?z[zt]=r.tallgrass:et==="forest"&&mt<.08&&r.fern?z[zt]=r.fern:et==="forest"&&mt<.084&&r.mushR&&(z[zt]=Vt<.5?r.mushR:r.mushB):ut===r.sand&&et==="desert"&&X>Dn+1&&mt<.008&&r.deadbush&&(z[zt]=r.deadbush)}for(let gt=2;gt<14;gt++)for(let St=2;St<14;St++){let Tt=ot+St,_t=Rt+gt,X=j[(gt+1)*$+St+1],et=it[gt*16+St],ut=z[xe(St,X,gt)];if(Math.abs(Tt-J.x)<7&&Math.abs(_t-J.z)<7||nt.some(oe=>Math.abs(Tt-oe.x)<di+2&&Math.abs(_t-oe.z)<di+2))continue;let zt=xr(n+7,Tt,_t),mt=xr(n+9,Tt,_t);if(et==="desert"&&ut===r.sand&&X>Dn+1&&zt<.008&&r.cactus){let oe=1+Math.floor(mt*3);for(let ft=X+1;ft<=X+oe&&ft<64;ft++)z[xe(St,ft,gt)]=r.cactus;continue}if(et==="snow"&&ut===r.snow&&zt<.02){U(z,St,gt,X,5+Math.floor(mt*3));continue}let Vt=et==="forest"?.035:et==="plains"?.003:0;ut===r.grass&&zt<Vt&&A(z,St,gt,X,Tt,_t,4+Math.floor(mt*2))}}function A(z,O,k,j,$,it,J){let nt=j+J;if(!(nt+2>=64)){for(let ot=nt-2;ot<=nt+1;ot++){let Rt=ot>=nt?1:2;for(let gt=-Rt;gt<=Rt;gt++)for(let St=-Rt;St<=Rt;St++){if(Rt===2&&Math.abs(St)===2&&Math.abs(gt)===2&&kn(n,$+St,ot,it+gt)<.6)continue;let Tt=xe(O+St,ot,k+gt);z[Tt]===r.air&&(z[Tt]=r.leaves)}}z[xe(O,j,k)]=r.dirt;for(let ot=j+1;ot<=nt;ot++)z[xe(O,ot,k)]=r.log}}function U(z,O,k,j,$){let it=j+$;if(!(it+2>=64)){for(let J=j+2;J<=it+1;J++){let nt=it+1-J,ot=nt>=4?2:nt>=1?1:0;for(let Rt=-ot;Rt<=ot;Rt++)for(let gt=-ot;gt<=ot;gt++){if(ot===2&&Math.abs(gt)+Math.abs(Rt)>3)continue;let St=xe(O+gt,J,k+Rt);z[St]===r.air&&(z[St]=r.sleaves)}}z[xe(O,j,k)]=r.dirt;for(let J=j+1;J<=it;J++)z[xe(O,J,k)]=r.slog}}let B={height:g,baseHeight:_,biomeOf:C,climate:x,genChunk:R,findSpawn:T,SEA:Dn},Z=lm(n,B,e);return B.villages=Z,B}function Au(n,t,e,i,s,r,o){let a=i/2,c=n-a,l=n+a,p=t,d=t+s,m=e-a,f=e+a,_=Math.floor(c),v=Math.floor(l-1e-6),g=Math.floor(p),x=Math.floor(d-1e-6),C=Math.floor(m),L=Math.floor(f-1e-6),T=!1;for(let S=g;S<=x;S++)for(let R=C;R<=L;R++)for(let N=_;N<=v;N++){let b=r(N,S,R);if(!b)continue;let A=b===!0?ib:b;for(let U of A){let B=N+U[0],Z=S+U[1],z=R+U[2],O=N+U[3],k=S+U[4],j=R+U[5];if(!(O<=c+1e-6||B>=l-1e-6||k<=p+1e-6||Z>=d-1e-6||j<=m+1e-6||z>=f-1e-6)){if(!o)return!0;T=!0,o.push([B,Z,z,O,k,j])}}}return T}var ib=[[0,0,0,1,1,1]],wo=(n,t,e,i,s,r)=>Au(n,t,e,i,s,r,null),dm=(n,t,e=.6,i=1.8)=>!wo(n.x,n.y,n.z,e,i,t);function oc(n,t,e,i,s={}){let r=s.w||.6,o=s.h||1.8,a=!!s.canStep,c=r/2,l=!1,p=0,d=Math.max(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z))*e,m=Math.max(1,Math.ceil(d/.3)),f=e/m,_=[];for(let v=0;v<m;v++){let g=t.y*f;g&&(_.length=0,Au(n.x,n.y+g,n.z,r,o,i,_)?(g<0?(n.y=Math.max(..._.map(x=>x[4])),l=!0):n.y=Math.min(..._.map(x=>x[1]))-o,t.y=0):n.y+=g);for(let x of["x","z"]){let C=t[x]*f;if(!C)continue;let L={x:n.x,y:n.y,z:n.z};if(L[x]+=C,_.length=0,!Au(L.x,L.y,L.z,r,o,i,_)){n[x]=L[x];continue}if(a&&(l||s.grounded)){let S=Math.max(..._.map(R=>R[4]));if(S-n.y>0&&S-n.y<=1.01&&!wo(L.x,S,L.z,r,o,i)&&!wo(n.x,S,n.z,r,o,i)){p+=S-n.y,n.y=S,n[x]=L[x];continue}}let T=x==="x"?0:2;n[x]=C>0?Math.min(..._.map(S=>S[T]))-c-1e-4:Math.max(..._.map(S=>S[T+3]))+c+1e-4,wo(n.x,n.y,n.z,r,o,i)&&(n[x]=L[x]-C),t[x]=0}}return!l&&t.y<=0&&wo(n.x,n.y-.02,n.z,r,o,i)&&(l=!0),{onGround:l,stepped:p}}function sb(n,t,e,i,s,r){let o=[n.x,n.y,n.z],a=[t.x,t.y,t.z],c=null;for(let l of r){let p=[e+l[0],i+l[1],s+l[2]],d=[e+l[3],i+l[4],s+l[5]],m=0,f=1/0,_=-1,v=!0;for(let g=0;g<3&&v;g++){if(Math.abs(a[g])<1e-12){(o[g]<p[g]||o[g]>d[g])&&(v=!1);continue}let x=(p[g]-o[g])/a[g],C=(d[g]-o[g])/a[g];x>C&&([x,C]=[C,x]),x>m&&(m=x,_=g),C<f&&(f=C),m>f&&(v=!1)}if(v&&(!c||m<c.t)){let g=[0,0,0];_>=0&&(g[_]=-Math.sign(a[_])),c={t:m,face:_>=0?g:null}}}return c}function vr(n,t,e,i,s,r){let o=Math.floor(n.x),a=Math.floor(n.y),c=Math.floor(n.z),l=Math.sign(t.x),p=Math.sign(t.y),d=Math.sign(t.z),m=l?Math.abs(1/t.x):1/0,f=p?Math.abs(1/t.y):1/0,_=d?Math.abs(1/t.z):1/0,v=l?(l>0?o+1-n.x:n.x-o)*m:1/0,g=p?(p>0?a+1-n.y:n.y-a)*f:1/0,x=d?(d>0?c+1-n.z:n.z-c)*_:1/0,C=[0,0,0],L=0;for(;L<=e;){let T=i(o,a,c);if(T&&s(T)){let S=r&&r(T);if(!S)return{x:o,y:a,z:c,n:T,face:C,dist:L};let R=sb(n,t,o,a,c,S);if(R&&R.t<=e)return{x:o,y:a,z:c,n:T,face:R.face||C,dist:R.t}}v<g&&v<x?(o+=l,L=v,v+=m,C=[-l,0,0]):g<x?(a+=p,L=g,g+=f,C=[0,-p,0]):(c+=d,L=x,x+=_,C=[0,0,-d])}return null}var Pu={};yi(Pu,{ACC:()=>gm,BOOST:()=>Eu,BRAKE:()=>_m,CONN:()=>pi,DECAY:()=>ym,DIR:()=>Eo,FRIC:()=>xm,MAX:()=>Ao,OPP:()=>br,SLOPE_G:()=>Tu,UP:()=>Di,blockId:()=>To,connect:()=>lc,isStraight:()=>Cu,linked:()=>vm,mount:()=>Ru,next:()=>Co,pos:()=>cc,shapeOf:()=>Mr,step:()=>Iu});var pi={ns:["n","s"],ew:["e","w"],ne:["n","e"],nw:["n","w"],se:["s","e"],sw:["s","w"],asc_n:["n","s"],asc_s:["s","n"],asc_e:["e","w"],asc_w:["w","e"]},Di={asc_n:"n",asc_s:"s",asc_e:"e",asc_w:"w"},Eo={n:[0,-1],s:[0,1],e:[1,0],w:[-1,0]},br={n:"s",s:"n",e:"w",w:"e"},rb=["ns","ew","ne","nw","se","sw"],pm={n:[.5,0],s:[.5,1],e:[1,.5],w:[0,.5]},gm=3,Ao=6,Eu=11,xm=.8,_m=6,ym=1.5,Tu=2.5,Cu=n=>n==="ns"||n==="ew"||!!Di[n],To=(n,t)=>(n?"powered_rail":"rail")+(t==="ns"?"":"_"+t),ac=(n,t)=>pi[n].find(e=>e!==t);function Mr(n,t){return!t||n===t?n==="n"||n==="s"?"ns":"ew":rb.find(e=>pi[e].includes(n)&&pi[e].includes(t))||null}function Co(n,t,e,i,s,r){let[o,a]=Eo[s];for(let c of Di[r]===s?[1]:[0,-1]){let l=n(t+o,e+c,i+a);if(l&&pi[l.shape].includes(br[s])&&Di[l.shape]===br[s]==(c===-1))return{x:t+o,y:e+c,z:i+a,r:l}}return null}function vm(n,t,e,i){let s=n(t,e,i);return s?pi[s.shape].filter(r=>Co(n,t,e,i,r,s.shape)):[]}function mm(n){let t=n.filter(e=>e.dy===1);if(t.length>1)return null;if(t.length){let e=t[0].d,i=n.find(s=>s!==t[0]);return!i||i.d===br[e]?"asc_"+e:null}return n.length===2?Mr(n[0].d,n[1].d):Mr(n[0].d)}function lc(n,t,e,i,s,r="n"){let o=[];for(let l of["n","e","s","w"]){let[p,d]=Eo[l],m=br[l];for(let f of[0,1,-1]){let _=t+p,v=e+f,g=i+d,x=n(_,v,g);if(!x)continue;if(pi[x.shape].includes(m)&&Di[x.shape]===m==(f===-1)){o.push({d:l,dy:f,pri:0});break}let C=vm(n,_,v,g);if(C.length>=2)continue;let L=null;if(f===-1?L=!C.length||C[0]===l?"asc_"+m:null:Di[x.shape]&&C.includes(Di[x.shape])||(L=C.length?Mr(C[0],m):Mr(m)),L&&(!x.powered||Cu(L))){o.push({d:l,dy:f,pri:1,ns:L,at:[_,v,g]});break}}}o.sort((l,p)=>l.pri-p.pri);let a=[];for(let l of o){if(a.length===2)break;let p=mm(a.concat([l]));!p||s&&!Cu(p)||a.push(l)}return{shape:a.length?mm(a):Mr(r),updates:a.filter(l=>l.pri===1).map(l=>[l.at[0],l.at[1],l.at[2],l.ns])}}function Ru(n,t,e,i,s,r,o=()=>!1){let a=pi[n],c=p=>Eo[p][0]*s+Eo[p][1]*r+(o(p)?.01:0),l=c(a[0])>=c(a[1])?a[0]:a[1];return{x:t,y:e,z:i,shape:n,from:l===a[0]?a[1]:a[0],s:.5,v:0,lastIn:0}}function Iu(n,t,e,i){let s=i(n.x,n.y,n.z);if(!s)return n.v=0,n;for(n.shape=s.shape,pi[s.shape].includes(n.from)||(n.from=pi[s.shape][0]),e<-.1&&n.lastIn>=-.1&&n.v===0&&(n.from=ac(s.shape,n.from),n.s=1-n.s),n.lastIn=e,s.powered&&(n.v=Math.max(n.v,Eu)),e>.1?n.v<Ao&&(n.v=Math.min(Ao,n.v+gm*t)):e<-.1?n.v=Math.max(0,n.v-_m*t):n.v=Math.max(0,n.v-xm*t),n.v>Ao&&!s.powered&&(n.v=Math.max(Ao,n.v-ym*t)),Di[s.shape]&&(n.v+=(ac(s.shape,n.from)===Di[s.shape]?-Tu:Tu)*t,n.v<0&&(n.from=ac(s.shape,n.from),n.s=1-n.s,n.v=-n.v)),n.s+=n.v*t;n.s>=1;){let r=ac(s.shape,n.from),o=Co(i,n.x,n.y,n.z,r,s.shape);if(o)n.x=o.x,n.y=o.y,n.z=o.z,n.from=br[r],n.s-=1,s=o.r,n.shape=s.shape,s.powered&&(n.v=Math.max(n.v,Eu));else{n.s=1,n.v=0;break}}return n}function cc(n){let t=pi[n.shape],e=t.includes(n.from)?n.from:t[0],i=t[0]===e?t[1]:t[0],s=pm[e],r=pm[i],o=[.5,.5],a=Math.max(0,Math.min(1,n.s)),[c,l,p]=a<.5?[s,o,a*2]:[o,r,a*2-1],d=c[0]+(l[0]-c[0])*p,m=c[1]+(l[1]-c[1])*p,f=Di[n.shape],_=f?f==="n"?1-m:f==="s"?m:f==="e"?d:1-d:0,v=f?i===f?1:-1:0;return{x:n.x+d,y:n.y+_,z:n.z+m,yaw:Math.atan2(-(l[0]-c[0]),-(l[1]-c[1])),pitch:Math.atan2(v,1)*(f?1:0)}}var Fu={};yi(Fu,{WINDOW:()=>ob,create:()=>Lu,reel:()=>Nu,roll:()=>Uu,tick:()=>Du});var ob=1.3,Mm=n=>3+n()*6;function Lu(n=Math.random){return{phase:"wait",t:0,biteAt:Mm(n),rnd:n}}function Du(n,t){return n.t+=t,n.phase==="wait"&&n.t>=n.biteAt?(n.phase="bite",n.t=0,"bite"):n.phase==="bite"&&n.t>1.3?(n.phase="wait",n.t=0,n.biteAt=Mm(n.rnd),"escape"):null}var Nu=n=>n&&n.phase==="bite"?"catch":"early";function Uu(n,t=Math.random){let e=n.reduce((s,r)=>s+r.w,0),i=t()*e;for(let s of n)if(i-=s.w,i<0)return s;return n[n.length-1]}function bm(n){return{stats:Object.assign({},n&&n.stats),done:Object.assign({},n&&n.done)}}function Sm(n,t,e=1){n.stats[t]=(n.stats[t]||0)+e}function wm(n,t,e=Date.now()){let i=[];for(let s of t)!n.done[s.id]&&(n.stats[s.stat]||0)>=s.need&&(n.done[s.id]=e,i.push(s));return i}var Am=(n,t)=>Math.min(t.need,n.stats[t.stat]||0);function Em(n,t,e,i,s=5){let r=0;for(let o of n)Math.abs(o[0]-t)<=s&&Math.abs(o[1]-e)<=s&&Math.abs(o[2]-i)<=s&&r++;return r}function Tm(n){let t=new Uint8Array(256);for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=0;for(let r=63;r>=0;r--){let o=n[xe(i,r,e)];if(o){s=o;break}}t[e*16+i]=s}return t}var Cm=n=>btoa(String.fromCharCode.apply(null,n)),Rm=n=>Uint8Array.from(atob(n),t=>t.charCodeAt(0));var lb=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],hc=class{constructor(t,e){this.reg=t,this.tops=new Map,this.tiles=new Map,this.portals=new Map,this.dirty=!1,this.rgb=[];for(let i of t.blocks)this.rgb[i.n]=lb(i.colors.top);if(e&&e.tops)for(let i in e.tops)try{this.tops.set(i,Rm(e.tops[i]))}catch{}if(e&&Array.isArray(e.portals))for(let i of e.portals)this.portals.set(i.x+","+i.z,i)}scan(t,e,i=4){let s=0;for(let[r,o]of t.chunks){if(s>=i)break;if(!o.vox||this.tops.has(r)&&!(e&&e.has(r)))continue;e&&e.delete(r);let a=Tm(o.vox);this.tops.set(r,a),this.tiles.delete(r),this.dirty=!0,s++;let[c,l]=rm(r);for(let[p,d]of[...this.portals])Math.floor(d.x/16)===c&&Math.floor(d.z/16)===l&&this.portals.delete(p);for(let p=0;p<256;p++){let d=this.reg.get(a[p]);if(d&&(d.interact==="portal"||d.interact==="shadow_portal")){let m=c*16+p%16,f=l*16+Math.floor(p/16);this.portals.set(m+","+f,{x:m,z:f,name:d.name_zh})}}}}tile(t){let e=this.tiles.get(t);if(e)return e;let i=this.tops.get(t);if(!i)return null;e=document.createElement("canvas"),e.width=e.height=16;let s=e.getContext("2d"),r=s.createImageData(16,16);for(let o=0;o<256;o++){let a=this.rgb[i[o]]||[239,235,221],c=o*4,l=.95+(o*2654435761>>>28)/16*.1;r.data[c]=a[0]*l,r.data[c+1]=a[1]*l,r.data[c+2]=a[2]*l,r.data[c+3]=i[o]?255:0}return s.putImageData(r,0,0),this.tiles.set(t,e),e}draw(t,e,i,s,r,o){t.imageSmoothingEnabled=!1;let a=e-r/2/s,c=i-o/2/s,l=e+r/2/s,p=i+o/2/s;for(let d=Math.floor(c/16);d<=Math.floor(p/16);d++)for(let m=Math.floor(a/16);m<=Math.floor(l/16);m++){let f=this.tile(Pi(m,d));f&&t.drawImage(f,Math.round((m*16-a)*s),Math.round((d*16-c)*s),Math.ceil(16*s),Math.ceil(16*s))}return{x0:a,z0:c}}explored(t,e){return this.tops.has(Pi(Math.floor(t/16),Math.floor(e/16)))}serialize(){let t={};for(let[e,i]of this.tops)t[e]=Cm(i);return this.dirty=!1,{tops:t,portals:[...this.portals.values()]}}};function Ou(n,t,e,i,s,r){let o=Math.atan2(-Math.cos(i),-Math.sin(i));n.save(),n.translate(t,e),n.rotate(o),n.fillStyle=r,n.strokeStyle="#EFEBDD",n.lineWidth=2,n.beginPath(),n.moveTo(s,0),n.lineTo(-s*.7,s*.65),n.lineTo(-s*.35,0),n.lineTo(-s*.7,-s*.65),n.closePath(),n.stroke(),n.fill(),n.restore()}var ku={};yi(ku,{ARENA_R:()=>Ro,H0:()=>mi,LAIR:()=>gi,findFrame:()=>zu,makeShadowTerrain:()=>Bu});var mi=22,gi={x:0,z:40},Ro=14;function Bu(n,t){let e=d=>t.num(d),i={stone:e("shadow_stone"),moss:e("shadow_moss"),vein:e("shadow_vein"),ore:e("dark_crystal_ore"),bedrock:e("bedrock"),frame:e("dark_crystal"),portal:e("shadow_portal"),bricks:e("shadow_bricks")},s=Li(n+11),r=Li(n+23),o=(d,m)=>d<m?1:d<m+8?1-(d-m)/8:0;function a(d,m){let f=mi+Xi(s,d/64,m/64,3)*10,_=Math.max(o(Math.hypot(d-.5,m-.5),9),o(Math.hypot(d-gi.x,m-gi.z),Ro+2));return f=f*(1-_)+mi*_,Math.max(6,Math.min(54,Math.round(f)))}let c=new Set;for(let d=0;d<8;d++)c.add(Math.round(gi.x+Math.cos(d*Math.PI/4)*Ro)+","+Math.round(gi.z+Math.sin(d*Math.PI/4)*Ro));function l(d,m){let f=new Uint8Array(16384),_=d*16,v=m*16;for(let g=0;g<16;g++)for(let x=0;x<16;x++){let C=_+x,L=v+g,T=a(C,L),S=Math.hypot(C-.5,L-.5),R=Math.hypot(C-gi.x,L-gi.z);for(let N=0;N<=T;N++){let b=N===0?i.bedrock:N===T?i.moss:i.stone;if(b===i.stone){let A=kn(n,C,N,L);N<16&&A<.014?b=i.ore:A>.995&&(b=i.vein)}f[xe(x,N,g)]=b}if(S>6&&Math.abs(r(C/30,L/30))<.035&&(f[xe(x,T,g)]=i.vein),R<Ro-1&&(f[xe(x,T,g)]=(Math.floor(C)+Math.floor(L))%2?i.bricks:i.stone),c.has(C+","+L)){for(let N=T+1;N<=T+4;N++)f[xe(x,N,g)]=i.bricks;f[xe(x,T+5,g)]=i.vein}if(L===0&&C>=-1&&C<=2)for(let N=mi+1;N<=mi+5;N++){let b=C>=0&&C<=1&&N>=mi+2&&N<=mi+4;f[xe(x,N,g)]=b?i.portal:i.frame}}return f}let p={x:1,y:mi+1,z:2.5,stele:{x:1,y:mi+1,z:10}};return{height:a,baseHeight:a,biomeOf:()=>"shadow",climate:()=>({t:0,u:0}),genChunk:l,findSpawn:()=>p,SEA:0,villages:{around:()=>[],chunk:()=>[]}}}function zu(n,t,e,i,s,r=o=>o===0){for(let o of[[1,0],[0,1]])for(let a=-2;a<=1;a++)for(let c=-4;c<=1;c++){let l=t+o[0]*a,p=i+o[1]*a,d=e+c,m=(v,g)=>[l+o[0]*v,d+g,p+o[1]*v],f=[];for(let v=0;v<2;v++)for(let g=0;g<3;g++)f.push(m(v,g));if(!f.every(v=>r(n(v[0],v[1],v[2]))))continue;let _=[];for(let v=0;v<3;v++)_.push(m(-1,v),m(2,v));for(let v=0;v<2;v++)_.push(m(v,-1),m(v,3));if(_.every(v=>n(v[0],v[1],v[2])===s)&&_.some(v=>v[0]===t&&v[1]===e&&v[2]===i))return f}return null}var Xu={};yi(Xu,{HOTBAR:()=>Vu,SIZE:()=>uc,add:()=>Sn,canAdd:()=>Lo,count:()=>xi,craft:()=>Gu,craftable:()=>dc,createInventory:()=>Io,deserialize:()=>fc,moveBetween:()=>Wu,moveSlot:()=>Hu,remove:()=>Po,serialize:()=>Do,takeFromSlot:()=>jn});var uc=36,Vu=9;function Io(n=36){return{slots:new Array(n).fill(null)}}function Sn(n,t,e,i=()=>64){let s=i(t);for(let r=0;r<n.slots.length&&e>0;r++){let o=n.slots[r];if(o&&o.id===t&&o.count<s){let a=Math.min(e,s-o.count);o.count+=a,e-=a}}for(let r=0;r<n.slots.length&&e>0;r++)if(!n.slots[r]){let o=Math.min(e,s);n.slots[r]={id:t,count:o},e-=o}return e}function xi(n,t){return n.slots.reduce((e,i)=>e+(i&&i.id===t?i.count:0),0)}function Po(n,t,e){if(xi(n,t)<e)return!1;for(let i=n.slots.length-1;i>=0&&e>0;i--){let s=n.slots[i];if(s&&s.id===t){let r=Math.min(e,s.count);s.count-=r,e-=r,s.count||(n.slots[i]=null)}}return!0}function jn(n,t,e=1){let i=n.slots[t];if(!i||i.count<e)return null;i.count-=e;let s=i.id;return i.count||(n.slots[t]=null),s}function Hu(n,t,e,i=()=>64){if(t===e)return;let s=n.slots[t],r=n.slots[e];if(s&&r&&s.id===r.id){let o=Math.min(s.count,i(s.id)-r.count);r.count+=o,s.count-=o,s.count||(n.slots[t]=null);return}n.slots[t]=r,n.slots[e]=s}function Lo(n,t,e,i=()=>64){let s={slots:n.slots.map(r=>r&&{...r})};return Sn(s,t,e,i)===0}var Do=n=>n.slots.map(t=>t?Number.isFinite(t.dur)?[t.id,t.count,t.dur]:[t.id,t.count]:0);function fc(n,t=36){let e=Io(t);return(n||[]).slice(0,t).forEach((i,s)=>{Array.isArray(i)&&typeof i[0]=="string"&&i[1]>0&&(e.slots[s]={id:i[0],count:i[1]|0},Number.isFinite(i[2])&&(e.slots[s].dur=i[2]))}),e}function dc(n,t,e={}){if(t.blueprint&&!(e.owned&&e.owned.has(t.blueprint)))return{ok:!1,reason:"blueprint"};if(t.needs&&!(e.near&&e.near.has(t.needs)))return{ok:!1,reason:"needs"};for(let i in t.in)if(xi(n,i)<t.in[i])return{ok:!1,reason:"materials"};return{ok:!0}}function Gu(n,t,e=()=>64,i){let s=dc(n,t,i||{near:new Set([t.needs]),owned:new Set([t.blueprint])});if(!s.ok)return s;let r=n.slots.map(o=>o&&{...o});for(let o in t.in)Po(n,o,t.in[o]);return Sn(n,t.out.id,t.out.count,e)>0?(n.slots=r,{ok:!1,reason:"full"}):{ok:!0}}function Wu(n,t,e,i,s=()=>64){let r=n.slots[t],o=e.slots[i];if(r&&o&&r.id===o.id){let a=Math.min(r.count,s(r.id)-o.count);o.count+=a,r.count-=a,r.count||(n.slots[t]=null);return}n.slots[t]=o,e.slots[i]=r}function cb(n=0){return{coins:n|0,earned:0,spent:0,owned:[]}}var Sr=(n,t)=>n.owned.includes(t),Im=(n,t)=>n?t?2:1:0;function Vn(n,t){return t=Math.max(0,t|0),n.coins+=t,n.earned+=t,n.coins}function Us(n,t){return t=Math.max(0,t|0),n.coins<t?!1:(n.coins-=t,n.spent+=t,!0)}function Pm(n){return n.blocks.concat(n.items).filter(t=>t&&t.buy).map(t=>({id:t.id,name_zh:t.name_zh,qty:t.buy.qty||1,price:t.buy.price|0,locked:t.buy.locked||null})).concat((n.blueprints||[]).map(t=>({id:t.id,name_zh:t.name_zh,qty:1,price:t.price|0,locked:t.locked||null,blueprint:!0,desc:t.desc||""})))}function Lm(n,t,e,i=()=>64){return e?e.locked?{ok:!1,reason:"locked"}:e.blueprint&&Sr(n,e.id)?{ok:!1,reason:"owned"}:n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?(Us(n,e.price),n.owned.push(e.id),{ok:!0}):Lo(t,e.id,e.qty,i)?(Us(n,e.price),Sn(t,e.id,e.qty,i),{ok:!0}):{ok:!1,reason:"full"}:{ok:!1,reason:"missing"}}var Dm=n=>({coins:n.coins,earned:n.earned,spent:n.spent,owned:n.owned.slice()});function Nm(n){let t=cb(n&&n.coins);return n&&(t.earned=n.earned|0,t.spent=n.spent|0,t.owned=Array.isArray(n.owned)?n.owned.slice():[]),t}function Fm(n){let t=()=>n&&n.KidsAuth,e=()=>n&&n.KidsCoins;return{loggedIn:()=>{try{return!!(t()&&t().isLoggedIn())}catch{return!1}},ready(){let i=e();return this.loggedIn()&&!!i&&typeof i.balance=="function"&&typeof i.spend=="function"},balance:()=>{try{let i=e().balance();return typeof i=="number"?i:null}catch{return null}},spend:(i,s)=>e().spend({amount:i,item:s}),report:i=>{try{e().report&&e().report(i)}catch{}}}}function Om(n,{mode:t="local",member:e=null}={}){return t==="member"&&e&&e.ready()?{source:"member",balance:()=>e.balance()??0,earn:(s,r)=>(e.report({type:"game",item:r||"hero-world",correct:s,total:s}),e.balance()),canSpend:s=>(e.balance()??0)>=s,spend:async(s,r)=>{try{let o=await e.spend(s,r);return o&&o.ok?{ok:!0}:{ok:!1,reason:o&&o.reason||"coins"}}catch{return{ok:!1,reason:"offline"}}}}:{source:"local",balance:()=>n.coins,earn:s=>Vn(n,s),canSpend:s=>n.coins>=s,spend:async s=>Us(n,s)?{ok:!0}:{ok:!1,reason:"coins"}}}function Bm(){let n=()=>{};return{online:!1,join:()=>Promise.resolve({ok:!1,reason:"offline"}),leave:n,sendState:n,sendBlock:n,sendEmote:n,on:n}}var Ku={};yi(Ku,{createStory:()=>qu,currentMain:()=>$u,dailyPicks:()=>zm,dailyProgress:()=>Ju,restartTutorial:()=>Yu,skipTutorial:()=>pc,tick:()=>Zu});function qu(n){return n=n||{},{tut:n.tut||{step:0,base:null,done:!1},main:n.main|0,daily:n.daily||null}}function zm(n,t,e=3){let i=2166136261;for(let o of String(t))i=Math.imul(i^o.charCodeAt(0),16777619)>>>0;let s=n.map((o,a)=>a),r=[];for(;r.length<Math.min(e,n.length);)i=Math.imul(i^i>>>13,2654435761)>>>0,r.push(s.splice(i%s.length,1)[0]);return r.map(o=>n[o].id)}var Yu=n=>{n.tut={step:0,base:null,done:!1}},pc=(n,t)=>{n.tut={step:t.tutorial.length,base:null,done:!0}},$u=(n,t)=>t.main[n.main]||null;function Zu(n,t,e,i){let s=[];if(!n.tut.done){let r=t.tutorial[n.tut.step];r?(n.tut.base==null&&(n.tut.base=e(r.stat)),e(r.stat)-n.tut.base>=r.need&&(s.push({kind:"tut",q:r}),n.tut.step++,n.tut.base=null,n.tut.step>=t.tutorial.length&&(n.tut.done=!0))):n.tut.done=!0}for(;n.main<t.main.length&&e(t.main[n.main].stat)>=t.main[n.main].need;)s.push({kind:"main",q:t.main[n.main]}),n.main++;if(!n.daily||n.daily.date!==i){let r=zm(t.daily,i);n.daily={date:i,picks:r,base:Object.fromEntries(r.map(o=>{let a=t.daily.find(c=>c.id===o);return[o,e(a.stat)]})),done:[]}}for(let r of n.daily.picks){if(n.daily.done.includes(r))continue;let o=t.daily.find(a=>a.id===r);o&&e(o.stat)-n.daily.base[r]>=o.need&&(n.daily.done.push(r),s.push({kind:"daily",q:o}))}return s}var Ju=(n,t,e,i)=>{let s=t.daily.find(r=>r.id===i);return Math.min(s.need,Math.max(0,e(s.stat)-(n.daily&&n.daily.base[i]||0)))};var Uo=[{name_zh:"\u55AE\u5B57",modules:["words"],types:["zh2en","en2zh","zh2en-type"]},{name_zh:"\u55AE\u5B57\uFF0B\u6587\u6CD5",modules:["words","grammar"],types:["grammar-fill","zh2en-type","en2zh"]},{name_zh:"\u53E5\u578B\uFF0B\u7247\u8A9E",modules:["words","grammar","patterns","phrases"],types:["pattern-choose","phrase-fill","grammar-fill","zh2en-type"]}],No=100,km={choice:25,typed:40},fb=5,ju=100;function Vm(){return{phase:0,hp:No,retry:[],done:!1}}function Hm(n,t,e,i){if(n.done)return{done:!0};if(!t)return n.hp=Math.min(No,n.hp+fb),i&&!n.retry.includes(i)&&n.retry.push(i),{ok:!1};i&&(n.retry=n.retry.filter(r=>r!==i));let s=e?km.typed:km.choice;return n.hp-=s,n.hp>0?{ok:!0,dmg:s}:n.phase<Uo.length-1?(n.phase++,n.hp=No,{ok:!0,dmg:s,phaseUp:n.phase}):(n.hp=0,n.done=!0,{ok:!0,dmg:s,done:!0})}var Qu=[{body:"#4A3A6B",belly:"#9C8AC8",wing:"#6B5A95"},{body:"#7A2E3A",belly:"#E09A7F",wing:"#A04A55"},{body:"#2E4A7A",belly:"#9CC4E8",wing:"#4A6EA8"}];function pb(){let n=document.createElement("canvas");n.width=128,n.height=80;let t=n.getContext("2d");for(let i of[34,94])t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(i,36,22,24,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(i+4,40,10,0,7),t.fill(),t.fillStyle="#EFEBDD",t.beginPath(),t.arc(i+8,35,3,0,7),t.fill();t.strokeStyle="#151714",t.lineWidth=4,t.beginPath(),t.arc(64,60,10,.2,Math.PI-.2),t.stroke();let e=new Zn(n);return e.colorSpace=sn,e}function Gm(){let n=new pn,t=[],e=(a,c)=>{let l=new vn({color:a});return l.userData.base=new ce(a),l.userData.role=c,t.push(l),l},i=(a,c,l,p,d,m,f,_,v=n)=>{let g=new Fe(new tn(a,c,l),e(p,d));return g.position.set(m,f,_),v.add(g),g},s=Qu[0];i(2,1.4,2.8,s.body,"body",0,1.3,.2),i(1.6,.2,2.2,s.belly,"belly",0,.62,.2),i(.8,.8,1.2,s.body,"body",0,2,-1.4),i(1.3,1,1.3,s.body,"body",0,2.5,-2.2),i(.9,.4,.5,s.belly,"belly",0,2.2,-2.95);let r=new Fe(new tn(1.15,.72,.02),new vn({map:pb(),transparent:!0}));r.position.set(0,2.62,-2.87),n.add(r);for(let a of[-1,1])i(.16,.42,.16,"#E0352B","accent",a*.42,3.18,-2.1),i(.4,.7,.4,s.wing,"wing",a*.7,.35,-.6),i(.4,.7,.4,s.wing,"wing",a*.7,.35,1);for(let a=0;a<3;a++)i(.22,.3,.3,"#E0352B","accent",0,2.12,-.6+a*.8);i(.7,.6,1.2,s.body,"body",0,1.1,2.1),i(.45,.4,1,s.body,"body",0,.95,3.1),i(.6,.12,.6,"#E0352B","accent",0,.95,3.75);let o=[-1,1].map(a=>{let c=new pn;return c.position.set(a*1,1.9,.2),n.add(c),i(2.4,.14,1.6,s.wing,"wing",a*1.2,0,0,c).rotation.x=-.55,i(2.4,.16,.16,"#E0352B","accent",a*1.2,.44,-.68,c),c});return n.userData={wings:o,mats:t,hitT:0},n.scale.setScalar(1.15),n}function Wm(n,t,e,i=.9){let s=n.userData;s.hitT=Math.max(0,s.hitT-e),s.wings[0].rotation.z=.25+Math.sin(t*3)*.45,s.wings[1].rotation.z=-s.wings[0].rotation.z,n.scale.setScalar(1.15*(1+s.hitT*.3));for(let r of s.mats)r.color.copy(r.userData.base).multiplyScalar(s.hitT>0?1.4:i)}function Xm(n,t){let e=Qu[Math.min(Qu.length-1,t)];for(let i of n.userData.mats)e[i.userData.role]&&i.userData.base.set(e[i.userData.role])}function mb(){return new Map}function qm(n,t,e,i){let s=n.get(t);s||(s=new Map,n.set(t,s)),s.set(e,i)}function tf(n){let t=new Array(n.size*2),e=0;for(let[i,s]of n)t[e++]=i,t[e++]=s;return t}function gb(n){let t=new Map;for(let e=0;e+1<(n||[]).length;e+=2)t.set(n[e]|0,n[e+1]|0);return t}function Ym(n){let t=mb();for(let e in n||{})t.set(e,gb(n[e]));return t}var mc=16;var eE=18;var Yi=32;function $m(n){let t=n>>>0||7;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var je=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],bt=(n,t=1,e=1)=>`rgba(${Math.round(Math.min(255,n[0]*t))},${Math.round(Math.min(255,n[1]*t))},${Math.round(Math.min(255,n[2]*t))},${e})`;function xb(n){let t=2166136261;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),16777619);return t>>>0}function ee(n,t){n.beginPath(),n.moveTo(t[0][0],t[0][1]);for(let e=1;e<t.length;e++)n.lineTo(t[e][0],t[e][1]);n.closePath(),n.fill()}function qi(n,t,e,i,s){let r=3+Math.floor(t()*2),o=[];for(let a=0;a<r;a++){let c=a/r*Math.PI*2+t()*.8;o.push([e+Math.cos(c)*s*(.6+t()*.5),i+Math.sin(c)*s*(.6+t()*.5)])}ee(n,o)}var _b=new Set(["flower","tallgrass","fern","deadbush","mushroom","ladder","door_open","wheat","rail"]);function yb(n,t){let e=je(t.color),i=$m(xb(t.block+t.face)),s=Yi;if(_b.has(t.pattern)){vb(n,t,e,i,s);return}let r=1;t.pattern==="stained"?r=.5:t.pattern==="glass"?r=.22:t.pattern==="water"?r=.72:t.pattern==="ice"&&(r=.78),n.fillStyle=bt(e,1,r),n.fillRect(0,0,s,s);let o=t.pattern,a=t.accent?je(t.accent):null;if(o==="grass"&&t.face==="top"){n.fillStyle=bt(e,1.12);for(let d=0;d<4;d++)qi(n,i,i()*s,i()*s,5+i()*4)}if(o==="snow"&&t.face==="top"){n.fillStyle=bt(e,.96);for(let d=0;d<4;d++)qi(n,i,i()*s,i()*s,4+i()*4)}if((o==="grass"||o==="snow")&&t.face==="side"){let d=je(t.top);n.fillStyle=bt(d);let m=[[0,0],[s,0]];for(let f=s;f>=0;f-=4)m.push([f,8+Math.round(i()*5)]);ee(n,m)}if(o==="stone"||o==="bedrock")for(let d=0;d<5;d++)n.fillStyle=bt(e,i()<.5?.9:1.08),qi(n,i,i()*s,i()*s,4+i()*6);if(o==="ore"){for(let d=0;d<4;d++)n.fillStyle=bt(e,.92),qi(n,i,i()*s,i()*s,5);n.fillStyle=bt(a);for(let d=0;d<5;d++)qi(n,i,5+i()*(s-10),5+i()*(s-10),2.5+i()*2.5)}if(o==="sand")for(let d=0;d<26;d++)n.fillStyle=bt(e,i()<.5?.92:1.05),n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2);if(o==="log"&&t.face==="side")for(let d=3;d<s;d+=7)n.fillStyle=bt(e,.82),n.fillRect(d,0,2,s);if(o==="log"&&t.face!=="side"&&(n.fillStyle=bt(e,.85),n.fillRect(6,6,s-12,s-12),n.fillStyle=bt(e,1.05),n.fillRect(11,11,s-22,s-22)),o==="leaves")for(let d=0;d<9;d++)n.fillStyle=bt(e,i()<.5?.78:1.15),qi(n,i,i()*s,i()*s,3+i()*4);if(o==="planks"||o==="table"&&t.face==="bottom"){for(let d=7;d<s;d+=8)n.fillStyle=bt(e,.78),n.fillRect(0,d,s,1);n.fillStyle=bt(e,.85),n.fillRect(12,0,1,7),n.fillRect(22,8,1,7),n.fillRect(6,16,1,7),n.fillRect(18,24,1,8)}if(o==="table"&&t.face==="top"&&(n.fillStyle=bt(e,.8),n.fillRect(s/2-1,3,2,s-6),n.fillRect(3,s/2-1,s-6,2)),o==="table"&&t.face==="side"&&(n.fillStyle=bt(e,.7),n.fillRect(6,10,7,14),n.fillStyle=bt([185,182,174]),ee(n,[[18,10],[27,12],[25,15],[19,14]]),n.fillStyle=bt(e,.6),n.fillRect(21,14,2,10)),o==="glass"&&(n.fillStyle="rgba(255,255,255,0.45)",ee(n,[[6,24],[9,24],[24,9],[24,6]])),o==="water"){n.fillStyle=bt(e,1.18,.72);for(let d=6;d<s;d+=10)n.fillRect(4+Math.floor(i()*10),d,10,2)}if(o==="gold"&&(n.fillStyle=bt(e,1.15),ee(n,[[0,0],[s,0],[0,s]]),n.fillStyle=bt(e,.9),ee(n,[[s,s],[s,8],[8,s]])),o==="lamp"&&(t.face==="side"?(n.fillStyle=bt(je("#F3E3B5")),n.fillRect(7,6,s-14,s-12),n.fillStyle=bt(e,.85),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3)):t.face==="top"&&(n.fillStyle=bt(e,1.05),n.fillRect(8,8,s-16,s-16))),o==="torch"&&(n.clearRect(0,0,s,s),t.face==="side"?(n.fillStyle=bt(je("#8C6640")),n.fillRect(13,0,6,s),n.fillStyle=bt(je("#F2C46B")),n.fillRect(13,0,6,8),n.fillStyle=bt(a),n.fillRect(14,0,4,4)):(n.fillStyle=bt(je(t.face==="top"?"#F2C46B":"#8C6640")),n.fillRect(12,12,8,8))),o==="bed"&&(t.face==="top"?(n.fillStyle=bt(a),n.fillRect(0,0,s,10),n.fillStyle=bt(e,.85),n.fillRect(0,10,s,3)):t.face==="side"&&(n.fillStyle=bt(je("#E0352B")),n.fillRect(0,0,s,14),n.fillStyle=bt(a),n.fillRect(0,0,9,14))),o==="wool")for(let d=0;d<7;d++)n.fillStyle=bt(e,i()<.5?.94:1.04),qi(n,i,i()*s,i()*s,4+i()*4);if(o==="portal"&&(n.fillStyle=bt(a),n.fillRect(5,5,s-10,s-10),n.fillStyle=bt(a,1.3),ee(n,[[s/2,8],[s-9,s/2],[s/2,s-8],[9,s/2]]),n.fillStyle=bt(je("#EFEBDD"),1,.8),ee(n,[[s/2,12],[s-13,s/2],[s/2,s-12],[13,s/2]]),n.fillStyle=bt(a),n.fillRect(s/2-3,s/2-3,6,6)),o==="sandstone")for(let d=8;d<s;d+=9)n.fillStyle=bt(e,.9),n.fillRect(0,d,s,2);if(o==="cactus")if(t.face==="side"){for(let d=4;d<s;d+=8)n.fillStyle=bt(e,.82),n.fillRect(d,0,2,s);n.fillStyle=bt(je("#EFEBDD"),1,.7);for(let d=0;d<6;d++)n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2)}else n.fillStyle=bt(e,.85),n.fillRect(6,6,s-12,s-12);if(o==="ice"&&(n.fillStyle="rgba(255,255,255,0.4)",ee(n,[[4,22],[8,22],[22,6],[18,6]])),o==="stained"&&(n.fillStyle="rgba(255,255,255,0.35)",ee(n,[[6,24],[9,24],[24,9],[24,6]])),o==="paper"&&(n.fillStyle=bt(e,1.1),ee(n,[[0,0],[s,0],[0,s*.7]]),n.fillStyle=bt(e,.92),ee(n,[[s,s],[s*.45,s],[s,s*.4]])),o==="stonebricks"||o==="mossy"&&t.block.includes("bricks")||o==="cracked"){n.fillStyle=bt(e,.78);for(let d=0;d<s;d+=8){n.fillRect(0,d+7,s,1);let m=d/8%2?0:8;for(let f=m;f<s;f+=16)n.fillRect(f,d,1,8)}}if(o==="mossy"){n.fillStyle=bt(a);for(let d=0;d<6;d++)qi(n,i,i()*s,i()*s,3+i()*4)}if(o==="cracked"&&(n.fillStyle=bt(e,.6),ee(n,[[4,2],[12,14],[10,15],[3,4]]),ee(n,[[20,18],[29,30],[27,31],[19,20]])),o==="chiseled"&&(n.fillStyle=bt(e,.8),n.fillRect(5,5,s-10,s-10),n.fillStyle=bt(e,1.08),n.fillRect(9,9,s-18,s-18),n.fillStyle=bt(e,.85),n.fillRect(13,13,s-26,s-26)),o==="smooth"&&(n.fillStyle=bt(e,.9),n.fillRect(0,s/2,s,1)),o==="polished"&&(n.fillStyle=bt(e,1.08),ee(n,[[0,0],[s*.6,0],[0,s*.6]])),o==="bricks"){n.fillStyle=bt(je("#D9CBB5"));for(let d=0;d<s;d+=8){n.fillRect(0,d+6,s,2);let m=d/8%2?0:8;for(let f=m;f<s;f+=16)n.fillRect(f,d,2,6)}}if(o==="checker"&&(n.fillStyle=bt(a),n.fillRect(0,0,s/2,s/2),n.fillRect(s/2,s/2,s/2,s/2)),o==="bookshelf"&&t.face==="side"){let d=["#C2443A","#4D6A99","#5E8B4E","#E1C04F","#7A5C8E","#D99AA5"];for(let m of[3,18]){let f=3;for(;f<s-4;){let _=3+Math.floor(i()*3);n.fillStyle=d[Math.floor(i()*d.length)],n.fillRect(f,m+Math.floor(i()*3),_,11),f+=_+1}}n.fillStyle=bt(e,.7),n.fillRect(0,15,s,2)}if(o==="bookshelf"&&t.face!=="side")for(let d=7;d<s;d+=8)n.fillStyle=bt(e,.8),n.fillRect(0,d,s,1);if(o==="hay")if(t.face==="side"){for(let d=3;d<s;d+=5)n.fillStyle=bt(e,.88),n.fillRect(d,0,1,s);n.fillStyle=bt(je("#8C6640")),n.fillRect(0,9,s,2),n.fillRect(0,21,s,2)}else n.fillStyle=bt(e,.9),n.fillRect(8,8,s-16,s-16);if(o==="barrel")if(t.face==="side"){for(let d=5;d<s;d+=6)n.fillStyle=bt(e,.85),n.fillRect(d,0,1,s);n.fillStyle=bt(je("#3B3D3A")),n.fillRect(0,5,s,2),n.fillRect(0,s-7,s,2)}else n.fillStyle=bt(e,.85),n.beginPath(),n.arc(s/2,s/2,11,0,7),n.fill(),n.fillStyle=bt(e,1.05),n.beginPath(),n.arc(s/2,s/2,7,0,7),n.fill();if(o==="crate"&&(n.fillStyle=bt(e,.78),n.fillRect(0,0,s,4),n.fillRect(0,s-4,s,4),n.fillRect(0,0,4,s),n.fillRect(s-4,0,4,s),ee(n,[[4,s-7],[s-7,4],[s-4,7],[7,s-4]])),o==="door"){for(let d=7;d<s;d+=8)n.fillStyle=bt(e,.85),n.fillRect(d,0,1,s);n.fillStyle=bt(je("#EFEBDD"),1,.9),n.fillRect(8,5,6,7),n.fillRect(18,5,6,7),n.fillStyle=bt(je("#26302A")),n.fillRect(24,17,3,3)}if(o==="lantern"&&(t.face==="side"?(n.fillStyle=bt(a),n.fillRect(0,0,s,5),n.fillRect(0,s-5,s,5),n.fillRect(0,0,5,s),n.fillRect(s-5,0,5,s)):(n.fillStyle=bt(e),n.fillRect(0,0,s,s),n.fillStyle=bt(je("#F2C46B")),n.fillRect(12,12,8,8))),o==="chest"){for(let d=7;d<s;d+=8)n.fillStyle=bt(e,.85),n.fillRect(0,d,s,1);t.face==="side"&&(n.fillStyle=bt(a),n.fillRect(0,11,s,3),n.fillStyle=bt(je("#D9A63A")),n.fillRect(s/2-3,10,6,7))}if(o==="farmland"&&t.face==="top")for(let d=3;d<s;d+=6)n.fillStyle=bt(e,.72),n.fillRect(0,d,s,2);if(o==="furnace"){for(let d=0;d<4;d++)n.fillStyle=bt(e,i()<.5?.9:1.08),qi(n,i,i()*s,i()*s,4+i()*5);t.face==="side"?(n.fillStyle=bt(a),n.fillRect(8,15,s-16,11),n.fillStyle=bt(je("#E0352B"),1,.85),ee(n,[[11,26],[s/2,18],[s-11,26]])):(n.fillStyle=bt(e,.8),n.fillRect(9,9,s-18,s-18))}o==="stele"&&t.face==="side"&&(n.fillStyle=bt(e,1.12),n.fillRect(5,4,s-10,s-8),n.fillStyle=bt(a),ee(n,[[s/2,8],[s/2+6,s/2],[s/2,s-8],[s/2-6,s/2]]));let c=n.getImageData(0,0,s,s),l=c.data;for(let d=0;d<l.length;d+=4){let m=1+(i()-.5)*.09;l[d]=Math.min(255,l[d]*m),l[d+1]=Math.min(255,l[d+1]*m),l[d+2]=Math.min(255,l[d+2]*m)}n.putImageData(c,0,0);let p=o==="glass"?"rgba(207,227,223,0.75)":"rgba(20,24,20,0.13)";n.fillStyle=p,n.fillRect(0,0,s,2),n.fillRect(0,s-2,s,2),n.fillRect(0,2,2,s-4),n.fillRect(s-2,2,2,s-4),o!=="glass"&&o!=="water"&&(n.fillStyle="rgba(20,24,20,0.06)",n.fillRect(2,2,s-4,2),n.fillRect(2,s-4,s-4,2))}function Zm(n){let t=document.createElement("canvas");t.width=t.height=Yi*mc;let e=t.getContext("2d",{willReadFrequently:!0}),i=[];return n.tiles.forEach((s,r)=>{let o=document.createElement("canvas");o.width=o.height=Yi;let a=o.getContext("2d",{willReadFrequently:!0});yb(a,s),e.drawImage(o,r%mc*Yi,Math.floor(r/mc)*Yi),i[r]=o}),{canvas:t,tileCanvas:i}}function Jm(n,t){let e={};for(let i of n.blocks){if(!i.n)continue;let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");if(i.shape==="cross"||i.pattern==="ladder"||i.pattern==="door_open"||i.pattern==="rail"){r.drawImage(t.tileCanvas[i.tile.side],4,4,40,40),e[i.id]=s.toDataURL();continue}if(i.shape==="torch"){r.fillStyle="#8C6640",r.fillRect(21,16,6,28),r.fillStyle="#F2C46B",ee(r,[[18,18],[24,4],[30,18],[24,22]]),r.fillStyle="#E0352B",ee(r,[[21,16],[24,9],[27,16]]),e[i.id]=s.toDataURL();continue}let o=t.tileCanvas,a=1/Yi,c=(l,p,d,m,f,_,v,g)=>{r.setTransform(p*a,d*a,m*a,f*a,_,v),r.drawImage(o[l],0,0),g&&(r.fillStyle=`rgba(20,24,20,${g})`,r.fillRect(0,0,Yi,Yi))};c(i.tile.top,20,10,-20,10,24,4,0),c(i.tile.side,20,10,0,22,4,14,.12),c(i.tile.side,20,-10,0,22,24,24,.26),e[i.id]=s.toDataURL()}for(let i of n.items){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d"),o=i.icon,a=i.color,c="#8C6640";if(r.save(),r.translate(24,24),o==="lump")r.fillStyle=a,ee(r,[[-14,4],[-8,-12],[6,-14],[15,-2],[10,12],[-6,14]]),r.fillStyle="rgba(255,255,255,.18)",ee(r,[[-8,-12],[6,-14],[2,-4]]);else if(o==="ingot")r.fillStyle=a,ee(r,[[-18,8],[-10,-6],[12,-6],[18,8]]),r.fillStyle="rgba(255,255,255,.3)",ee(r,[[-10,-6],[12,-6],[9,-1],[-8,-1]]),r.fillStyle="rgba(0,0,0,.12)",r.fillRect(-18,8,36,4);else if(o==="hide")r.fillStyle=a,ee(r,[[-15,-10],[-6,-15],[8,-13],[16,-6],[13,12],[0,15],[-14,10]]),r.fillStyle="rgba(0,0,0,.14)",ee(r,[[-6,-4],[6,-6],[4,6],[-5,5]]);else if(o==="feather")r.rotate(-Math.PI/4),r.fillStyle=a,ee(r,[[0,-20],[7,-6],[5,10],[0,14],[-5,10],[-7,-6]]),r.fillStyle="#B9B6AE",r.fillRect(-1,-14,2,32);else if(o==="seeds"){r.fillStyle=a;for(let[l,p]of[[-6,-4],[3,-8],[6,3],[-3,6],[-9,6]])r.beginPath(),r.ellipse(l,p,3,2,.6,0,7),r.fill()}else if(o==="wheat"){r.rotate(-Math.PI/4),r.fillStyle="#B89A4A",r.fillRect(-1,-6,2,24),r.fillStyle=a;for(let l=0;l<4;l++)ee(r,[[0,-18+l*5],[-5,-14+l*5],[0,-12+l*5]]),ee(r,[[0,-18+l*5],[5,-14+l*5],[0,-12+l*5]])}else if(o==="bread"){r.fillStyle=a,r.beginPath(),r.ellipse(0,2,17,10,-.2,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.25)";for(let l of[-8,0,8])r.fillRect(l-1,-6,3,8)}else if(o==="armor_helmet")r.fillStyle=a,ee(r,[[-14,6],[-14,-6],[-6,-14],[6,-14],[14,-6],[14,6],[8,6],[8,-2],[-8,-2],[-8,6]]);else if(o==="armor_chest")r.fillStyle=a,ee(r,[[-16,-12],[-6,-16],[0,-10],[6,-16],[16,-12],[12,-2],[10,16],[-10,16],[-12,-2]]);else if(o==="armor_legs")r.fillStyle=a,ee(r,[[-12,-16],[12,-16],[12,16],[3,16],[0,-4],[-3,16],[-12,16]]);else if(o==="armor_boots")r.fillStyle=a,ee(r,[[-16,-4],[-8,-4],[-8,8],[-2,12],[-2,16],[-16,16]]),ee(r,[[2,-4],[10,-4],[10,8],[16,12],[16,16],[2,16]]);else if(o==="dye")r.fillStyle=a,r.beginPath(),r.arc(-2,2,12,0,7),r.fill(),r.beginPath(),r.arc(9,-8,5,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.25)",r.beginPath(),r.arc(-6,-2,4,0,7),r.fill();else if(o==="apple")r.fillStyle=a,r.beginPath(),r.arc(-4,3,11,0,7),r.arc(5,3,11,0,7),r.fill(),r.fillStyle="#8C6640",r.fillRect(-1,-14,3,8),r.fillStyle="#3E6B3A",ee(r,[[2,-10],[12,-15],[9,-6]]),r.fillStyle="rgba(255,255,255,.3)",r.beginPath(),r.arc(-8,-1,3,0,7),r.fill();else if(o==="fish")r.fillStyle=a,r.beginPath(),r.ellipse(-3,0,14,8,0,0,7),r.fill(),ee(r,[[9,0],[19,-9],[19,9]]),r.fillStyle="rgba(255,255,255,.25)",ee(r,[[-12,-3],[2,-7],[-2,-1]]),r.fillStyle="#26302A",r.beginPath(),r.arc(-10,-2,2,0,7),r.fill();else if(o==="rod")r.strokeStyle=a,r.lineWidth=4,r.beginPath(),r.moveTo(-16,17),r.lineTo(14,-16),r.stroke(),r.strokeStyle="#26302A",r.lineWidth=1,r.beginPath(),r.moveTo(14,-16),r.lineTo(14,8),r.stroke(),r.fillStyle="#E0352B",r.beginPath(),r.arc(14,10,4,0,7),r.fill();else if(o==="boat")r.fillStyle=a,ee(r,[[-19,-3],[19,-3],[13,10],[-13,10]]),r.fillStyle="rgba(0,0,0,.2)",ee(r,[[-15,-3],[15,-3],[13,1],[-13,1]]),r.fillStyle=c,r.fillRect(-2,-14,3,11);else if(o==="minecart"){r.fillStyle=a,ee(r,[[-16,-10],[16,-10],[13,8],[-13,8]]),r.fillStyle="rgba(0,0,0,.25)",ee(r,[[-12,-10],[12,-10],[11,-5],[-11,-5]]),r.fillStyle="#26302A";for(let l of[-8,8])r.beginPath(),r.arc(l,10,4,0,7),r.fill()}else o==="saddle"?(r.fillStyle=a,ee(r,[[-16,-2],[-10,-10],[-2,-6],[6,-12],[16,-4],[12,8],[-12,8]]),r.fillStyle="#26302A",r.fillRect(-2,8,4,9),r.fillStyle="#D9A63A",r.fillRect(-4,15,8,3)):o==="gem"?(r.fillStyle=a,ee(r,[[0,-16],[14,-4],[0,16],[-14,-4]]),r.fillStyle="rgba(255,255,255,.35)",ee(r,[[0,-16],[14,-4],[0,-2]])):(r.rotate(-Math.PI/4),r.fillStyle=o==="stick"?a:c,r.fillRect(-3,-14,6,32),r.fillStyle=a,o==="pickaxe"&&(r.beginPath(),r.moveTo(-16,-14),r.quadraticCurveTo(0,-24,16,-14),r.lineTo(14,-9),r.quadraticCurveTo(0,-17,-14,-9),r.closePath(),r.fill()),o==="axe"&&ee(r,[[2,-18],[15,-14],[15,-2],[2,-6]]),o==="shovel"&&ee(r,[[-7,-22],[7,-22],[8,-10],[0,-5],[-8,-10]]),o==="hoe"&&r.fillRect(-3,-18,14,5),o==="sword"&&(r.fillRect(-4,-24,8,30),ee(r,[[-4,-24],[0,-30],[4,-24]]),r.fillStyle=c,r.fillRect(-9,6,18,4)));r.restore(),e[i.id]=s.toDataURL()}for(let i of n.blueprints||[]){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");r.fillStyle="#26302A",ee(r,[[6,10],[40,6],[42,38],[8,42]]),r.fillStyle="rgba(239,235,221,.55)";for(let o=0;o<4;o++)r.fillRect(12,14+o*7,24,2);r.fillStyle=i.id==="bp_diamond"?"#6FC7C0":"#D8D4CA",ee(r,[[28,26],[36,30],[30,38],[24,32]]),e[i.id]=s.toDataURL()}return e}function Km(){let n=$m(99),t=[],e=[];for(let i=0;i<4;i++){let s=document.createElement("canvas");s.width=s.height=Yi;let r=s.getContext("2d");i&&r.drawImage(e[i-1],0,0),r.fillStyle="rgba(21,23,20,0.55)";for(let o=0;o<3+i*2;o++){let a=6+n()*20,c=6+n()*20,l=n()*Math.PI;ee(r,[[a,c],[a+Math.cos(l)*9,c+Math.sin(l)*9],[a+Math.cos(l+.3)*6,c+Math.sin(l+.3)*6]])}e.push(s),t.push(s)}return t}function vb(n,t,e,i,s){n.clearRect(0,0,s,s);let r=t.pattern,o=t.accent?je(t.accent):e,a=(c,l,p)=>{n.fillStyle=p,n.fillRect(c,s-l,2,l)};if(r==="flower"){a(15,18,bt(e)),n.fillStyle=bt(e,1.1),ee(n,[[16,26],[9,20],[15,22]]),ee(n,[[17,24],[24,18],[18,21]]),n.fillStyle=bt(o);for(let c=0;c<5;c++){let l=c/5*Math.PI*2;ee(n,[[16,9],[16+Math.cos(l)*7,9+Math.sin(l)*7],[16+Math.cos(l+.6)*7,9+Math.sin(l+.6)*7]])}n.fillStyle=bt(je("#E1C04F")),n.fillRect(14,7,4,4)}else if(r==="tallgrass"||r==="fern")for(let c=0;c<6;c++){let l=4+c*4+Math.floor(i()*2),p=14+Math.floor(i()*14);n.fillStyle=bt(e,i()<.5?.9:1.1),ee(n,[[l,s],[l+3,s],[l+1+(r==="fern"?2:0),s-p]])}else if(r==="deadbush")n.strokeStyle=bt(e),n.lineWidth=2,n.beginPath(),n.moveTo(16,s),n.lineTo(16,18),n.lineTo(9,10),n.moveTo(16,20),n.lineTo(24,11),n.moveTo(16,24),n.lineTo(7,19),n.stroke();else if(r==="mushroom")n.fillStyle=bt(e),n.fillRect(14,18,4,14),n.fillStyle=bt(o),ee(n,[[6,19],[10,11],[16,8],[22,11],[26,19]]),n.fillStyle=bt(je("#EFEBDD")),n.fillRect(12,13,3,2),n.fillRect(19,15,2,2);else if(r==="ladder"){n.fillStyle=bt(e),n.fillRect(5,0,3,s),n.fillRect(s-8,0,3,s),n.fillStyle=bt(e,1.12);for(let c=3;c<s;c+=7)n.fillRect(5,c,s-10,3)}else if(r==="wheat"){let c=Number(t.block.split("_")[1])||0,l=[8,14,21,28][c];for(let p=0;p<5;p++){let d=5+p*5;n.fillStyle=bt(e),n.fillRect(d,s-l,2,l),c===3&&(n.fillStyle=bt(o),ee(n,[[d-2,s-l+9],[d+1,s-l-1],[d+4,s-l+9]]))}}else if(r==="rail"){let c=(t.block.match(/_(ew|ne|nw|se|sw)$/)||[0,"ns"])[1],l={ns:0,ew:1,ne:0,se:1,sw:2,nw:3}[c];n.save(),n.translate(s/2,s/2),n.rotate(l*Math.PI/2),n.translate(-s/2,-s/2);let p=bt(je("#8C6640")),d=bt(e),m=s*.33,f=s*.67;if(c==="ns"||c==="ew"){n.fillStyle=p;for(let _=2;_<s;_+=6)n.fillRect(4,_,s-8,3);n.fillStyle=d,n.fillRect(m-1.5,0,3,s),n.fillRect(f-1.5,0,3,s),t.accent&&(n.fillStyle=bt(o),n.fillRect(s/2-1.5,3,3,s-6))}else{n.strokeStyle=p,n.lineWidth=3;for(let _=0;_<5;_++){let v=Math.PI/2+(_+.5)/5*Math.PI/2;n.beginPath(),n.moveTo(s+Math.cos(v)*(s-f-4),Math.sin(v)*(s-f-4)),n.lineTo(s+Math.cos(v)*(s-m+4),Math.sin(v)*(s-m+4)),n.stroke()}n.strokeStyle=d;for(let _ of[s-m,s-f])n.beginPath(),n.arc(s,0,_,Math.PI/2,Math.PI),n.stroke()}n.restore()}else r==="door_open"&&(n.fillStyle=bt(e),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3),n.fillRect(0,0,3,s),n.fillRect(s-3,0,3,s))}var jm=`attribute float light; attribute vec2 lt; varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vUv=uv; vL=light; vLt=lt; vec4 mv=modelViewMatrix*vec4(position,1.0); vD=-mv.z; gl_Position=projectionMatrix*mv; }`,Qm=`uniform sampler2D uAtlas; uniform float uDay; uniform vec3 uFog; uniform float uNear; uniform float uFar;
varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vec4 t=texture2D(uAtlas,vUv); if(t.a<0.04) discard;
 vec3 tint=vec3(1.0); float l;
 if(vL>1.5){ l=1.12; } else {
  float sky=vLt.x*mix(0.35,1.0,uDay), bl=vLt.y;
  l=vL*mix(0.16,1.0,max(sky,bl)); l=floor(l*5.0+0.5)/5.0; l=max(l,0.08);
  tint=mix(vec3(1.0),vec3(1.12,0.97,0.8),step(sky,bl)*bl);
 }
 float f=smoothstep(uNear,uFar,vD); gl_FragColor=vec4(mix(t.rgb*l*tint,uFog,f), t.a); }`;function Mb(n,t){let e=Wi(n),i=Wi(t),s=[[e,i]];for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){if(!o&&!r)continue;let a=(e+o)*16,c=(i+r)*16,l=n<a?a-n:n>=a+16?n-(a+16-1):0,p=t<c?c-t:t>=c+16?t-(c+16-1):0;Math.max(l,p)<=14&&s.push([e+o,i+r])}return s}function e0(n){let t=new Zn(n);t.magFilter=rn,t.minFilter=rn,t.generateMipmaps=!1;let e={uAtlas:{value:t},uDay:{value:1},uFog:{value:new K(.94,.92,.87)},uNear:{value:30},uFar:{value:60}},i=new Mn({uniforms:e,vertexShader:jm,fragmentShader:Qm}),s=new Mn({uniforms:e,vertexShader:jm,fragmentShader:Qm,transparent:!0,depthWrite:!1,side:Jn});return{opaque:i,trans:s,uniforms:e,tex:t}}function t0(n){let t=new on;return t.setAttribute("position",new Je(n.pos,3)),t.setAttribute("uv",new Je(n.uv,2)),t.setAttribute("light",new Je(n.light,1)),t.setAttribute("lt",new Je(n.lt,2,!0)),t.setIndex(new Je(n.index,1)),t.computeBoundingSphere(),t}var gc=class{constructor({scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}){Object.assign(this,{scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}),this.chunks=new Map,this.dirtyMesh=new Set,this.inflight=0,this.maxInflight=3,this.rd=4,this.rev=0,this.stats={meshMs:[],genMs:[],loaded:0},s.addEventListener("message",a=>this.onMsg(a.data))}onMsg(t){if(t.type!=="chunk"&&t.type!=="mesh")return;let e=Pi(t.cx,t.cz),i=this.chunks.get(e);t.type==="chunk"&&this.inflight--,i&&(t.type==="chunk"&&(i.vox=t.vox,i.state="ready",this.stats.genMs.push(t.genMs)),!(t.rev<i.meshRev)&&(this.stats.meshMs.push(t.ms),this.stats.meshMs.length>400&&this.stats.meshMs.shift(),this.setMesh(i,t.mesh)))}setMesh(t,e){for(let i of["o","t"])t[i]&&(this.scene.remove(t[i]),t[i].geometry.dispose(),t[i]=null);e.opaque.index.length&&(t.o=new Fe(t0(e.opaque),this.mats.opaque),t.o.position.set(t.cx*16,0,t.cz*16),t.o.matrixAutoUpdate=!1,t.o.updateMatrix(),this.scene.add(t.o)),e.trans.index.length&&(t.t=new Fe(t0(e.trans),this.mats.trans),t.t.position.set(t.cx*16,0,t.cz*16),t.t.matrixAutoUpdate=!1,t.t.updateMatrix(),t.t.renderOrder=1,this.scene.add(t.t))}flushMeshes(){if(this.dirtyMesh.size){for(let t of this.dirtyMesh){let e=this.chunks.get(t);e&&e.state==="ready"&&(e.meshRev=++this.rev,this.worker.postMessage({type:"mesh",cx:e.cx,cz:e.cz,rev:e.meshRev}))}this.dirtyMesh.clear()}}update(t,e){this.flushMeshes();let i=Wi(t),s=Wi(e),r=om(i,s,this.rd);for(let c of r){if(this.inflight>=this.maxInflight)break;let l=Pi(c.cx,c.cz);if(this.chunks.has(l))continue;let p={cx:c.cx,cz:c.cz,vox:null,state:"loading",meshRev:++this.rev,o:null,t:null};this.chunks.set(l,p),this.inflight++,this.worker.postMessage({type:"load",cx:c.cx,cz:c.cz,rev:p.meshRev})}let o=this.rd+1.5,a=[];for(let[c,l]of this.chunks){let p=l.cx-i,d=l.cz-s;if(p*p+d*d>o*o){for(let m of["o","t"])l[m]&&(this.scene.remove(l[m]),l[m].geometry.dispose());this.chunks.delete(c),a.push(c)}}a.length&&this.worker.postMessage({type:"drop",keys:a.filter(c=>{let[l,p]=c.split(",").map(Number);return Math.abs(l-i)>this.rd+3||Math.abs(p-s)>this.rd+3})}),this.stats.loaded=[...this.chunks.values()].filter(c=>c.state==="ready").length}ready(t,e){let i=this.chunks.get(Pi(Wi(t),Wi(e)));return!!(i&&i.state==="ready")}get(t,e,i){let s=vu(t,e,i);if(!s)return e<0?13:0;let r=this.chunks.get(Pi(s.cx,s.cz));return r&&r.vox?r.vox[s.i]:0}set(t,e,i,s){let r=vu(t,e,i);if(!r)return!1;let o=Pi(r.cx,r.cz),a=this.chunks.get(o);if(!a||!a.vox)return!1;a.vox[r.i]=s,qm(this.diffs,o,r.i,s),this.worker.postMessage({type:"set",x:t,y:e,z:i,n:s});let c=Math.floor(t),l=Math.floor(i);for(let[p,d]of Mb(c,l))this.dirtyMesh.add(Pi(p,d));return this.onDirty&&this.onDirty(o),!0}setRenderDistance(t){this.rd=t;let e=this.mats.uniforms;e.uFar.value=t*16-2,e.uNear.value=Math.max(8,t*16*.45)}clear(){for(let t of this.chunks.values())for(let e of["o","t"])t[e]&&(this.scene.remove(t[e]),t[e].geometry.dispose());this.chunks.clear()}};var ef="hw_world",Fo=null;function n0(n){n!==ef&&(ef=n,Fo=null)}function i0(){return Fo||(Fo=new Promise((n,t)=>{if(!("indexedDB"in self))return t(new Error("no indexedDB"));let e=indexedDB.open(ef,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)}),Fo)}function nf(n,t){return i0().then(e=>new Promise((i,s)=>{let r=e.transaction("kv",n),o=r.objectStore("kv"),a=t(o);r.oncomplete=()=>i(a instanceof IDBRequest?a.result:void 0),r.onerror=()=>s(r.error)}))}var sf=n=>nf("readonly",t=>t.get(n)),xc=n=>nf("readwrite",t=>{for(let e in n)t.put(n[e],e)});async function rf(n){let t=await i0();return new Promise((e,i)=>{let s={},r=t.transaction("kv","readonly"),o=r.objectStore("kv").openCursor(IDBKeyRange.bound(n,n+"\uFFFF"));o.onsuccess=()=>{let a=o.result;a&&(s[a.key]=a.value,a.continue())},r.oncomplete=()=>e(s),r.onerror=()=>i(r.error)})}async function of(n){let t={};for(let e of n){let i=await sf(e);i!==void 0&&(t[e]=i)}await nf("readwrite",e=>e.clear()),await xc(t)}function P(n,t,...e){let i=document.createElement(n);for(let s in t||{}){let r=t[s];r==null||r===!1||(s.startsWith("on")?i.addEventListener(s.slice(2),r):s==="html"?i.innerHTML=r:i.setAttribute(s,r===!0?"":r))}for(let s of e.flat())s!=null&&s!==!1&&i.append(s.nodeType?s:document.createTextNode(String(s)));return i}var $i=n=>document.querySelector(n);function Sb(n,t,e,i,s){let r={t:i,id:n.id,m:n.module,k:n.tkey,y:n.type,ok:t?1:0,a:String(e??"").slice(0,120)};return s&&(r.r=s(r)),r}function r0(n,t,e,i,s,r){if(!t||!t.id)return null;let o=Sb(t,e,i,s,r),a=n.get("ke_log"),c=Array.isArray(a)?a:[];if(c.push(o),n.set("ke_log",c),e){let d=n.get("ke_correct"),m=Array.isArray(d)?d:[];m.includes(t.id)||(m.push(t.id),n.set("ke_correct",m))}let l=n.get("ke_mistakes")||{},p=l[t.id]&&!l[t.id].d?l[t.id]:null;return e?p&&(p.c++,p.u=s,p.c>=3&&(l[t.id]={d:1,w:p.w,t:p.t,u:s})):l[t.id]={c:0,w:((l[t.id]||{}).w||0)+1,t:s,u:s},(!e||p)&&n.set("ke_mistakes",l),o}var s0=n=>n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate();function o0(n,t=Date.now()){let e=s0(new Date(t)),i=0;for(let s of Array.isArray(n)?n:[])s&&s0(new Date(s.t))===e&&i++;return i}function a0(n,{learnedQ:t=new Set,mistakes:e={},correct:i=new Set}={},s=5,r=Math.random){let o=[],a=[],c=[];for(let f of n)e[f]&&!e[f].d?o.push(f):t.has(f)||i.has(f)?c.push(f):a.push(f);let l=f=>{for(let _=f.length-1;_>0;_--){let v=Math.floor(r()*(_+1));[f[_],f[v]]=[f[v],f[_]]}return f};[o,a,c].forEach(l);let p=[],d=(f,_)=>{for(;_-- >0&&f.length;)p.push(f.pop())},m=Math.round(s*.7);return d(o,Math.ceil(m/2)),d(a,m-p.length),d(o,m-p.length),d(c,s-p.length),d(a,s-p.length),d(o,s-p.length),p}var wb="../../",Ab=["data/words.js","data/words-2.js","data/words-3.js","data/words-4.js","data/phrases.js","data/roots.js","data/grammar.js","data/patterns.js","engine.js","syncmerge.js"],lf=["zh2en","en2zh","zh2en-type","phrase-fill","grammar-fill","pattern-choose"],_c=null,cf=()=>({get:n=>{try{return JSON.parse(localStorage.getItem(n)||"null")}catch{return null}},set:(n,t)=>localStorage.setItem(n,JSON.stringify(t))}),af=null,c0=n=>{af=n},h0=()=>o0(cf().get("ke_log"));function hf(n,t,e){try{r0(cf(),n,t,e,Date.now(),window.KESyncMerge&&window.KESyncMerge.rid)}catch(i){console.warn("[hero-world] \u5B78\u7FD2\u7D00\u9304\u5BEB\u4E0D\u9032\u53BB",i)}if(af)try{af(t,n)}catch{}}function uf(n,t,e){try{let i=cf(),s=i.get("ke_learned")||{},r=new Set;for(let l in s)s[l]&&s[l].at&&(n.sets&&n.sets[l]||[]).forEach(p=>r.add(p));let o=n.list(t).filter(l=>l.type!=="speak").map(l=>l.id),a=a0(o,{learnedQ:r,mistakes:i.get("ke_mistakes")||{},correct:new Set(i.get("ke_correct")||[])},e),c=a.length?n.buildQuiz(Object.assign({},t,{ids:a,count:a.length})):[];if(c.length)return c}catch{}return n.buildQuiz(Object.assign({},t,{count:e}))}function Eb(n){return new Promise((t,e)=>{let i=document.createElement("script");i.src=n,i.onload=t,i.onerror=()=>e(new Error("load "+n)),document.head.appendChild(i)})}function ff(){return _c||(_c=(async()=>{for(let t of Ab)await Eb(wb+t);let n=window;return new n.KE.Engine({words:n.DATA_WORDS||[],phrases:n.DATA_PHRASES||[],roots:n.DATA_ROOTS||[],grammar:n.DATA_GRAMMAR||[],patterns:n.DATA_PATTERNS||[]})})().catch(n=>{throw _c=null,n})),_c}async function u0(n,{onReward:t,onAnswer:e,onClose:i,count:s=5}){n.innerHTML="",n.hidden=!1;let r=P("div",{class:"panel quiz"});n.append(r),r.append(P("div",{class:"p-head"},P("h2",{},"\u7DF4\u7FD2\u77F3\u7891"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:m},"\xD7")),P("p",{class:"muted"},"\u984C\u5EAB\u8F09\u5165\u4E2D\u2026"));let o;try{o=await ff()}catch{r.lastChild.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557\uFF0C\u8ACB\u6AA2\u67E5\u7DB2\u8DEF\u5F8C\u518D\u8A66\u4E00\u6B21\u3002";return}let a=window.KE,c=[],l=0,p=0,d=0;function m(){n.hidden=!0,n.innerHTML="",i&&i()}function f(){c=uf(o,{modules:["words","phrases","grammar","patterns"],types:lf,lv:1},s),c.length||(c=o.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:s})),l=0,p=0,d=0,_()}function _(){r.innerHTML="";let x=c[l],C=a.isTyped(x);n._q=x;let L=P("div",{class:"fb"}),T=P("div",{class:"q-body"});r.append(P("div",{class:"p-head"},P("h2",{},"\u7DF4\u7FD2\u77F3\u7891 ",P("small",{},`\u7B2C ${l+1} / ${c.length} \u984C`)),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:m},"\xD7")),P("div",{class:"q-type"},(a.TYPES[x.type]||"\u984C\u76EE")+(C?"\u3000\u6253\u5B57\u984C \xB7 \u7B54\u5C0D 2 \u91D1\u5E63":"\u3000\u7B54\u5C0D 1 \u91D1\u5E63")),P("div",{class:"q-prompt"+(x.en?" en":"")},x.prompt),x.sub?P("div",{class:"q-sub"},x.sub):null,T,L);let S=!1,R=(N,b)=>{if(S)return;S=!0,hf(x,N,b);let A=Im(N,C);e&&e(N),N&&(d++,p+=A,t&&t(A)),L.className="fb "+(N?"ok":"bad"),L.append(P("div",{},N?`\u7B54\u5C0D\u4E86\uFF01 +${A} \u91D1\u5E63`:"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",N?null:P("b",{class:"en"},x.answer)),!N&&x.why?P("div",{class:"why"},x.why):null,P("button",{class:"btn",onclick:v},l+1<c.length?"\u4E0B\u4E00\u984C":"\u770B\u7D50\u679C"))};if(x.input==="type"){let N=P("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),b=()=>{S||!N.value.trim()||R(o.check(x,N.value).ok,N.value)};N.addEventListener("keydown",A=>{A.stopPropagation(),A.key==="Enter"&&b()}),T.append(P("div",{class:"typerow"},N,P("button",{class:"btn",onclick:b},"\u9001\u51FA"))),setTimeout(()=>N.focus(),50)}else{let N=P("div",{class:"opts"});(x.options||[]).forEach(b=>N.append(P("button",{class:"opt"+(/[a-z]/i.test(b)?" en":""),onclick:A=>{if(S)return;let U=o.check(x,b).ok;A.currentTarget.classList.add(U?"ok":"bad"),R(U,b)}},b))),T.append(N)}}function v(){l++,l<c.length?_():g()}function g(){r.innerHTML="",r.append(P("div",{class:"p-head"},P("h2",{},"\u9019\u4E00\u56DE\u7D50\u675F"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:m},"\xD7")),P("p",{class:"big"},`\u7B54\u5C0D ${d} / ${c.length} \u984C\uFF0C\u62FF\u5230 ${p} \u91D1\u5E63`),P("div",{class:"row"},P("button",{class:"btn",onclick:f},"\u518D\u4F86\u4E00\u56DE"),P("button",{class:"btn ghost",onclick:m},"\u56DE\u53BB\u84CB\u623F\u5B50")))}f()}var l0=new Set(lf);async function df(n,{ids:t=[],onDone:e,types:i,modules:s,title:r,okText:o}){n.innerHTML="",n.hidden=!1;let a=P("div",{class:"panel quiz"});n.append(a),a.append(P("p",{class:"muted"},"\u932F\u984C\u602A\u51FA\u984C\u4E2D\u2026"));let c;try{c=await ff()}catch{a.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(null)},1200);return}let l=window.KE,p=null,d=i?new Set(i.filter(C=>l0.has(C))):l0;for(let C of t){let L=c.byId[C];if(L&&d.has(L.type)){p=c.get(C);break}}let m=!!p;p||(p=uf(c,{modules:s||["words","phrases","grammar","patterns"],types:i?[...d]:lf,lv:1},1)[0]||c.buildQuiz({modules:["words"],types:["zh2en","en2zh"],lv:1,count:1})[0]);let f=l.isTyped(p);n._q=p,a.innerHTML="";let _=P("div",{class:"fb"}),v=P("div",{class:"q-body"});a.append(P("div",{class:"p-head"},P("h2",{},r||"\u932F\u984C\u602A\u4F86\u4E86\uFF01")),P("div",{class:"q-type"},(m?"\u4F60\u4EE5\u524D\u932F\u904E\u7684\u984C\u76EE":l.TYPES[p.type]||"\u984C\u76EE")+"\u3000\u7B54\u5C0D\u5C31\u80FD\u6253\u6557\u5B83"),P("div",{class:"q-prompt"+(p.en?" en":"")},p.prompt),p.sub?P("div",{class:"q-sub"},p.sub):null,v,_);let g=!1,x=(C,L)=>{g||(g=!0,hf(p,C,L),_.className="fb "+(C?"ok":"bad"),_.append(P("div",{},C?o||"\u7B54\u5C0D\u4E86\uFF01\u932F\u984C\u602A\u8B8A\u6210\u7D19\u7247\u98DB\u8D70\u4E86":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",C?null:P("b",{class:"en"},p.answer)),!C&&p.why?P("div",{class:"why"},p.why):null,P("button",{class:"btn",onclick:()=>{n.hidden=!0,n.innerHTML="",e&&e(C,f,p)}},"\u7E7C\u7E8C")))};if(p.input==="type"){let C=P("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),L=()=>{g||!C.value.trim()||x(c.check(p,C.value).ok,C.value)};C.addEventListener("keydown",T=>{T.stopPropagation(),T.key==="Enter"&&L()}),v.append(P("div",{class:"typerow"},C,P("button",{class:"btn",onclick:L},"\u9001\u51FA"))),setTimeout(()=>C.focus(),50)}else{let C=P("div",{class:"opts"});(p.options||[]).forEach(L=>C.append(P("button",{class:"opt"+(/[a-z]/i.test(L)?" en":""),onclick:T=>{if(g)return;let S=c.check(p,L).ok;T.currentTarget.classList.add(S?"ok":"bad"),x(S,L)}},L))),v.append(C)}}async function f0(n,{quest:t,onDone:e}){n.innerHTML="",n.hidden=!1;let i=P("div",{class:"panel quiz"});n.append(i),i.append(P("p",{class:"muted"},"\u59D4\u8A17\u6E96\u5099\u4E2D\u2026"));let s;try{s=await ff()}catch{i.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(-1)},1200);return}let r=window.KE,o=uf(s,{modules:[t.module],types:t.types,lv:t.lv},t.count);o.length||(o=s.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:t.count}));let a=0,c=0,l=()=>{i.innerHTML="";let p=o[a];n._q=p;let d=P("div",{class:"fb"}),m=P("div",{class:"q-body"});i.append(P("div",{class:"p-head"},P("h2",{},t.title_zh+" ",P("small",{},`\u7B2C ${a+1} / ${o.length} \u984C \xB7 \u8981\u7B54\u5C0D ${t.need} \u984C`))),P("div",{class:"q-type"},r.TYPES[p.type]||"\u984C\u76EE"),P("div",{class:"q-prompt"+(p.en?" en":"")},p.prompt),p.sub?P("div",{class:"q-sub"},p.sub):null,m,d);let f=!1,_=(v,g)=>{f||(f=!0,hf(p,v,g),v&&c++,d.className="fb "+(v?"ok":"bad"),d.append(P("div",{},v?"\u7B54\u5C0D\u4E86\uFF01":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",v?null:P("b",{class:"en"},p.answer)),!v&&p.why?P("div",{class:"why"},p.why):null,P("button",{class:"btn",onclick:()=>{a++,a<o.length?l():(n.hidden=!0,n.innerHTML="",e&&e(c,o.length))}},a+1<o.length?"\u4E0B\u4E00\u984C":"\u5B8C\u6210")))};if(p.input==="type"){let v=P("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),g=()=>{f||!v.value.trim()||_(s.check(p,v.value).ok,v.value)};v.addEventListener("keydown",x=>{x.stopPropagation(),x.key==="Enter"&&g()}),m.append(P("div",{class:"typerow"},v,P("button",{class:"btn",onclick:g},"\u9001\u51FA"))),setTimeout(()=>v.focus(),50)}else{let v=P("div",{class:"opts"});(p.options||[]).forEach(g=>v.append(P("button",{class:"opt"+(/[a-z]/i.test(g)?" en":""),onclick:x=>{if(f)return;let C=s.check(p,g).ok;x.currentTarget.classList.add(C?"ok":"bad"),_(C,g)}},g))),m.append(v)}};l()}function d0(n,t,e){let[i,s]=String(n).split(",").map(Number),r=p=>kn(4242,i|0,t*7+p,s|0),o=e.professions[Math.floor(r(1)*e.professions.length)],a=e.quests,c=Math.floor(r(2)*a.length),l=(c+1+Math.floor(r(3)*(a.length-1)))%a.length;return{prof:o,quests:[a[c],a[l]]}}function p0(n,t,e,i=()=>64){return n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?Sr(n,e.blueprint)?{ok:!1,reason:"owned"}:(Us(n,e.price),n.owned.push(e.blueprint),{ok:!0}):Lo(t,e.give,e.count,i)?(Us(n,e.price),Sn(t,e.give,e.count,i),{ok:!0}):{ok:!1,reason:"full"}}var pf=(n,t,e)=>!!(n&&n[t.id]===e);function m0(n,t,e,i,s,r,o=()=>64){if(pf(n,t,i))return{ok:!1,reason:"done"};if(e<t.need)return{ok:!1,reason:"need"};n[t.id]=i,Vn(s,t.reward.coins|0);let a={};for(let c in t.reward.items||{}){let l=Sn(r,c,t.reward.items[c],o);l&&(a[c]=l)}return{ok:!0,coins:t.reward.coins|0,items:t.reward.items||{},leftovers:a}}function yc(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}var mf={survival:{db:"hw_world",seedOffset:0},creative:{db:"hw_creative",seedOffset:1}},vc=n=>n==="creative"?"creative":"survival",g0=n=>mf[vc(n)].db;function x0(n,t,e){return n?n.isSet(e)?n.verify(t,e)?{ok:!0}:{ok:!1,reason:"wrong"}:{ok:!1,reason:"unset"}:{ok:!1,reason:"nopin"}}function _0(n){let t=vc(n)==="creative";return{creative:t,consume:!t,drops:!t,damage:!t,coins:!t,quizMobs:!t,portals:!t,trading:!t,breakTime:t?.08:null}}function y0(n){return n.blocks.filter(t=>t.n&&t.placeable&&!["stele","bedrock","door_open"].includes(t.id)&&!t.portal&&!t.liquid&&!t.hidden).map(t=>t.id)}var v0=["grass","stone_bricks","planks","glass","wool_red","paper_yellow","lantern","door","flower_rose"];var Af={};yi(Af,{BREED_CAP:()=>Sf,LOVE_MS:()=>b0,MAX_STAGE:()=>Ib,STAGE_SECONDS:()=>Rb,armorMax:()=>M0,armorPoints:()=>Oo,canTill:()=>xf,eat:()=>bf,equip:()=>Pb,findMate:()=>wf,harvest:()=>_f,nearWater:()=>yf,reduceDamage:()=>Mf,stageAt:()=>gf,wearArmor:()=>vf});var Rb=60,Ib=3;function gf(n,t,e){let i=Math.floor((t-n)/1e3/(e?30:60));return Math.max(0,Math.min(3,i))}var xf=(n,t)=>(n==="grass"||n==="dirt")&&t;function _f(n,t=Math.random){return n>=3?[{id:"wheat",n:1},{id:"seeds",n:1+Math.floor(t()*2)}]:[{id:"seeds",n:1}]}function yf(n,t,e,i,s,r=4){for(let o=-r;o<=r;o++)for(let a=-r;a<=r;a++)for(let c of[0,-1])if(t(n(e+a,i+c,s+o)))return!0;return!1}function Oo(n,t){return(n||[]).reduce((e,i)=>{let s=i&&t.get(i);return e+(s&&s.armor?s.armor.points:0)},0)}var M0=(n,t)=>{let e=n&&t.get(n);return e&&e.armor?e.armor.dur||100:0};function vf(n,t,e,i=1){let s=[];return n.forEach((r,o)=>{if(!r)return;let a=(t[o]==null?M0(r,e):t[o])-i;a<=0?(s.push(r),n[o]=null,t[o]=null):t[o]=a}),s}var Mf=(n,t)=>Math.max(0,Math.round(n*(1-Math.min(.8,t*.04))));function Pb(n,t,e,i){let s=e&&i.get(e);if(e&&(!s||!s.armor||s.armor.slot!==t))return{ok:!1};let r=n[t]||null;return n[t]=e||null,{ok:!0,old:r}}function bf(n,t,e){return n.hp>=e?!1:(n.hp=Math.min(e,n.hp+t),!0)}var b0=3e4,Sf=12;function wf(n,t,e){return n.find(i=>i!==t&&!i.gone&&i.type===t.type&&i.love&&e-i.love<b0&&Math.hypot(i.p.x-t.p.x,i.p.z-t.p.z)<8)||null}var Rf={};yi(Rf,{apply:()=>Sc,duck:()=>ys,muted:()=>Bo,rainLevel:()=>Cf,scene:()=>Tf,setVolume:()=>wc,sfx:()=>cn,state:()=>Lb,toggleMute:()=>Ef,unlock:()=>bc});var Xe=null,Fs=null,Mc=null,wr=null,Hn=()=>window.HIAudio||null,w0=()=>Hn()?Hn().get():{muted:!1,music:.35,sfx:.7};function bc(){try{Hn()&&Hn().unlock()}catch{}if(!Xe){let n=window.AudioContext||window.webkitAudioContext;if(!n)return;Xe=new n,Fs=Xe.createGain(),Fs.connect(Xe.destination),Mc=Xe.createBuffer(1,Xe.sampleRate,Xe.sampleRate);let t=Mc.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}Xe.state==="suspended"&&Xe.resume(),Sc()}function Sc(){if(Fs){let n=w0();Fs.gain.setTargetAtTime(n.muted?0:n.sfx,Xe.currentTime,.03)}}var Bo=()=>w0().muted;function Ef(){return Hn()&&Hn().toggle(),Sc(),Bo()}function wc(n){Hn()&&Hn().set(n),Sc()}function Tf(n){try{Hn()&&Hn().scene(n)}catch{}}function ys(n){let t=Hn();t&&(n&&ys.id==null?ys.id=t.duckStart():!n&&ys.id!=null&&(t.duckEnd(ys.id),ys.id=null))}function A0(n,t,e,i,s){n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(i,t+e),n.gain.exponentialRampToValueAtTime(1e-4,t+e+s)}function Qn(n,t,e,i,s,r,o){let a=Xe.createOscillator(),c=Xe.createGain();a.type=n,a.frequency.setValueAtTime(t,e),o&&a.frequency.exponentialRampToValueAtTime(o,e+i+r),A0(c,e,i,s,r),a.connect(c),c.connect(Fs),a.start(e),a.stop(e+i+r+.05)}function vs(n,t,e,i,s,r=1){let o=Xe.createBufferSource(),a=Xe.createBiquadFilter(),c=Xe.createGain();o.buffer=Mc,a.type=n,a.frequency.value=t,a.Q.value=r,A0(c,e,.004,i,s),o.connect(a),a.connect(c),c.connect(Fs),o.start(e,Math.random()*.5),o.stop(e+s+.05)}var S0={wood:(n,t)=>{Qn("sine",190*t,n,.003,.16,.12,95*t),vs("bandpass",700*t,n,.08,.08,2)},stone:(n,t)=>{vs("highpass",1800*t,n,.1,.06),Qn("triangle",140*t,n,.002,.08,.08,90*t)},sand:(n,t)=>{vs("lowpass",520*t,n,.12,.18)},glass:(n,t)=>{Qn("sine",1900*t,n,.002,.08,.25,1500*t),vs("highpass",4200,n,.06,.12)},soft:(n,t)=>{vs("bandpass",850*t,n,.09,.1,.8)}};function cn(n,t="soft"){if(!Xe||Bo())return;let e=Xe.currentTime+.005,i=S0[t]||S0.soft;switch(n){case"break":i(e,1),i(e+.05,.8);break;case"hit":i(e,1.15);break;case"place":i(e,1.3);break;case"step":{vs(t==="stone"?"highpass":"bandpass",t==="stone"?1500:650,e,t==="sand"?.05:.035,.06);break}case"pickup":Qn("sine",880,e,.002,.07,.08,1320);break;case"chest":Qn("triangle",160,e,.02,.07,.3,120),Qn("sine",330,e+.12,.005,.05,.15);break;case"door":Qn("sawtooth",120,e,.03,.04,.3,160),vs("lowpass",400,e+.25,.08,.1);break;case"eat":[0,.13,.26].forEach(s=>vs("bandpass",1200+Math.random()*600,e+s,.07,.07,1.5));break;case"trade":Qn("triangle",659,e,.005,.08,.15),Qn("triangle",988,e+.1,.005,.08,.25);break;case"coin":Qn("sine",1319,e,.002,.08,.08),Qn("sine",1976,e+.07,.002,.08,.22);break;case"hurt":Qn("triangle",300,e,.005,.1,.18,200);break;default:break}}function Cf(n){if(Xe){if(!wr&&n>.01){let t=Xe.createBufferSource(),e=Xe.createBiquadFilter(),i=Xe.createBiquadFilter(),s=Xe.createGain();t.buffer=Mc,t.loop=!0,e.type="lowpass",e.frequency.value=2600,i.type="highpass",i.frequency.value=400,s.gain.value=0,t.connect(i),i.connect(e),e.connect(s),s.connect(Fs),t.start(),wr={s:t,g:s}}wr&&wr.g.gain.setTargetAtTime(.06*n,Xe.currentTime,.4)}}var Lb=()=>({ctx:Xe?Xe.state:"none",hi:Hn()?Hn().state():null,rain:wr?+wr.g.gain.value.toFixed(3):0});var Uf={};yi(Uf,{HI_SCENE:()=>Pf,createWeather:()=>Lf,precipFor:()=>Nf,sceneFor:()=>If,soundOf:()=>Ar,stepWeather:()=>Df});function Ar(n){if(!n)return"soft";let t=n.pattern||"";return t==="glass"||t==="stained"||t==="ice"?"glass":t==="sand"||t==="snow"||n.id==="sand"||n.id==="farmland"?"sand":n.tool==="axe"||t==="planks"||t==="log"||t==="door"?"wood":n.tool==="pickaxe"?"stone":"soft"}function If({day:n,underground:t}){return t?"cave":n<.25?"night":"calm"}var Pf={calm:"hub",night:"night",cave:"cave"};function Lf(n=Math.random){return{kind:"clear",left:180+n()*300,level:0}}function Df(n,t,e=Math.random){n.left-=t,n.left<=0&&(n.kind==="clear"?(n.kind="rain",n.left=60+e()*90):(n.kind="clear",n.left=180+e()*300));let i=n.kind==="rain"?1:0;return n.level+=Math.sign(i-n.level)*Math.min(Math.abs(i-n.level),t/6),n}function Nf(n,t){return!t||t.level<=.01||n==="desert"?null:n==="snow"?"snow":"rain"}var Db=[1,2,4,6,8];function Ac(n,t){if(t&&t.type==="rod"&&(t=null),!n||n.hardness<0)return{time:1/0,harvest:!1,usesTool:!1};let e=.25+n.hardness*.55,i=n.tier|0,r=!!(t&&n.tool&&t.type===n.tool)?t.tier:0;return i>0&&r<i?{time:e*3,harvest:!1,usesTool:!!t&&t.type!=="sword"}:{time:Math.max(.1,e/Db[r]),harvest:!0,usesTool:!!t&&t.type!=="sword"}}function zo(n,t,e,i=1){let s=n.slots[t];if(!s)return{broke:!1};let r=e.toolOf(s.id);if(!r)return{broke:!1};let o=r.durability;return s.dur=(s.dur==null?o:s.dur)-i,s.dur<=0?(n.slots[t]=null,{broke:!0,id:s.id}):{broke:!1,left:s.dur,max:o}}function E0(n,t){if(!n)return null;let e=t.toolOf(n.id),i=!e&&t.get(n.id),s=e?e.durability:i&&i.armor?i.armor.dur||100:0;if(!s)return null;let r=n.dur==null?s:n.dur;return{left:r,max:s,frac:r/s}}var Vf={};yi(Vf,{collect:()=>zf,createFurnace:()=>Ff,dismantle:()=>kf,start:()=>Of,tick:()=>Bf});function Ff(){return{fuel:0,jobs:[],done:{}}}function Of(n,t,e,i=4){if(xi(t,e.in)<1)return{ok:!1,reason:"materials"};let s=n.jobs.length;if(n.fuel-s<1){if(xi(t,"coal")<1)return{ok:!1,reason:"fuel"};Po(t,"coal",1),n.fuel+=i}return Po(t,e.in,1),n.jobs.push({in:e.in,out:e.out,left:e.time}),{ok:!0}}function Bf(n,t){for(;t>0&&n.jobs.length;){let e=n.jobs[0],i=Math.min(t,e.left);e.left-=i,t-=i,e.left<=1e-9&&(n.jobs.shift(),n.fuel-=1,n.done[e.out]=(n.done[e.out]||0)+1)}return n}function zf(n,t,e=()=>64){let i=0;for(let s of Object.keys(n.done)){let r=Sn(t,s,n.done[s],e);i+=n.done[s]-r,r?n.done[s]=r:delete n.done[s]}return i}function kf(n){let t=Object.assign({},n.done);for(let e of n.jobs)t[e.in]=(t[e.in]||0)+1;return t}var $f={};yi($f,{MAX_HP:()=>ko,REGEN_EVERY:()=>Ub,SAFE_FALL:()=>Nb,createHealth:()=>Hf,damage:()=>Wf,fallDamage:()=>Gf,hearts:()=>Yf,regen:()=>Xf,respawnPoint:()=>qf});var ko=20,Nb=4,Ub=4;function Hf(n=20){return{hp:Math.max(0,Math.min(20,n)),regenT:0}}function Gf(n,{water:t=!1,flying:e=!1}={}){return t||e||n<=4?0:Math.floor((n-4)/2)+1}function Wf(n,t){return t>0&&(n.hp=Math.max(0,n.hp-t),n.regenT=0),n.hp<=0}function Xf(n,t){return n.hp<=0||n.hp>=20?(n.regenT=0,!1):(n.regenT+=t,n.regenT>=4?(n.regenT-=4,n.hp=Math.min(20,n.hp+1),!0):!1)}function qf(n,t,e){return n&&e?{x:n.x+.5,y:n.y+1,z:n.z+.5}:{x:t.x,y:t.y,z:t.z}}function Yf(n){let t=[];for(let e=0;e<20/2;e++){let i=n-e*2;t.push(i>=2?"full":i===1?"half":"empty")}return t}var Ec={animal:8,quiz:4};function T0(){return{list:[],nextId:1}}var Vo=(n,t)=>n.list.reduce((e,i)=>e+(i.kind===t&&!i.gone?1:0),0);function C0(n,t,e){let i={id:n.nextId++,type:t.id,kind:t.kind,def:t,p:{x:e.x,y:e.y,z:e.z},v:{x:0,y:0,z:0},yaw:0,hp:t.hp||2,t:0,turn:0,gone:!1,busy:!1,onGround:!1};return n.list.push(i),i}function R0(n,t){return n<.2&&!t}function I0(n,t,e){return n.tame?!1:n.kind==="quiz"?t>.45||e>48:e>72}function P0(n,t,e,i){let s=n.def,r=t.x-n.p.x,o=t.z-n.p.z,a=Math.hypot(r,o);if(n.t+=e,n.busy){n.v.x=0,n.v.z=0,n.kind==="villager"&&(n.yaw=Math.atan2(-r,-o));return}if(n.home){let c=n.home.x-n.p.x,l=n.home.z-n.p.z,p=Math.hypot(c,l);if(p>10){n.yaw=Math.atan2(-c,-l),n.v.x=c/p*s.speed,n.v.z=l/p*s.speed,n.t=0,n.turn=1;return}}if(n.kind==="quiz"&&a<16){n.yaw=Math.atan2(-r,-o);let c=a>1.6?s.speed:0;n.v.x=r/(a||1)*c,n.v.z=o/(a||1)*c;return}n.t>=n.turn&&(n.t=0,n.turn=2+i()*4,i()<.35?(n.v.x=0,n.v.z=0):(n.yaw=i()*Math.PI*2,n.v.x=-Math.sin(n.yaw)*s.speed,n.v.z=-Math.cos(n.yaw)*s.speed))}function L0(n,t,e){if(n.kind!=="animal"||n.gone)return null;if(n.hp-=t?n.hp:1,n.hp>0)return{drops:null};n.gone=!0;let i=n.def.drops||{},s=(i.min||1)+Math.floor(e()*((i.max||1)-(i.min||1)+1));return{drops:i.id?{id:i.id,n:s}:null}}var D0=(n,t)=>n?(t?2:1)+1:0;function Tc(n,t,e,i,s){let r=[e.x-i/2,e.y,e.z-i/2],o=[e.x+i/2,e.y+s,e.z+i/2],a=[n.x,n.y,n.z],c=[t.x,t.y,t.z],l=0,p=1/0;for(let d=0;d<3;d++){if(Math.abs(c[d])<1e-9){if(a[d]<r[d]||a[d]>o[d])return null;continue}let m=(r[d]-a[d])/c[d],f=(o[d]-a[d])/c[d];if(m>f&&([m,f]=[f,m]),l=Math.max(l,m),p=Math.min(p,f),l>p)return null}return l}function N0(n){return Object.keys(n||{}).filter(t=>n[t]&&!n[t].d).sort((t,e)=>(n[e].u||0)-(n[t].u||0))}var U0=n=>`../hero-island/?map=${encodeURIComponent(n)}&from=world`;function F0(n,t){let e=new Set(t||[]);return(Array.isArray(n)?n:[]).filter(i=>i&&i.id&&!e.has(i.id))}function O0(n,t,e,i,s=()=>64){let r=(t||[]).find(l=>l.map===n.map);if(!r)return{ok:!1,coins:0,items:{},leftovers:{}};let o=r.reward.coins|0,a=Object.assign({},r.reward.items),c={};Vn(i,o);for(let l in a){let p=Sn(e,l,a[l],s);p&&(c[l]=p)}return{ok:!0,coins:o,items:a,leftovers:c,name_zh:r.name_zh}}function B0(n,t,e){let i=new Set;for(let r of Array.isArray(n)?n:[])r&&r.map&&i.add(r.map);let s=t&&t.defeated;if(s)for(let r of e||[])r.boss&&s[r.boss]&&i.add(r.map);return i}function Zf(n,t,e){let i=(t||[]).findIndex(r=>r.map===n);if(i<0)return{ok:!1,need:null};if(i===0)return{ok:!0};let s=t[i-1];return e.has(s.map)?{ok:!0}:{ok:!1,need:s}}function z0(n,t){let e=(n||[]).findIndex(i=>!t.has(i.map));return e<=0?null:Zf(n[e].map,n,t).ok?n[e]:null}var Ni={};function Er(n){return Ni[n]||(Ni[n]=new vn({color:n,transparent:!0}),Ni[n].userData.base=new ce(n)),Ni[n]}var Ho=null;function Bb(){if(Ho)return Ho;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");return t.fillStyle="#26302A",t.fillRect(0,0,64,64),t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(20,28,8,10,0,0,7),t.ellipse(44,28,8,10,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(22,31,4,0,7),t.arc(46,31,4,0,7),t.fill(),t.fillStyle="#E0352B",t.font="bold 18px sans-serif",t.textAlign="center",t.fillText("?",32,58),Ho=new Zn(n),Ho.colorSpace=sn,Ho}function k0(n,t){let e=new pn,i=n.colors,[s,r]=n.size,o=(c,l,p,d,m,f,_,v)=>{let g=new Fe(new tn(c,l,p),v||Er(d));return g.position.set(m,f,_),e.add(g),g},a=[];if(n.kind==="villager"){for(let l of[-.13,.13]){let p=o(.2,.6,.22,i.leg,l,.6,0);p.geometry.translate(0,-.6/2,0),a.push(p)}o(.56,.78,.34,t||i.body,0,.6+.39,0);for(let l of[-.36,.36])o(.16,.62,.18,t||i.body,l,1.3399999999999999,0).geometry.translate(0,-.27,0);o(.42,.42,.4,i.head,0,.6+.78+.22,0),o(.5,.1,.48,i.hat,0,.6+.78+.46,0),o(.32,.14,.3,i.hat,0,.6+.78+.56,0),o(.08,.12,.06,"#C9A27A",0,.6+.78+.18,-.22)}else if(n.kind==="quiz"){let c=o(s,r*.72,s*.8,i.body,0,r*.36+.12,0);Ni.__face||(Ni.__face=new vn({map:Bb(),transparent:!0}),Ni.__face.userData.base=new ce("#ffffff"));let l=[Er(i.head),Er(i.head),Er(i.head),Er(i.head),Er(i.head),Ni.__face],p=new Fe(new tn(s*.9,s*.8,s*.8),l);p.position.set(0,r*.72+s*.4,0),e.add(p),a.push(o(.18,.24,.18,i.head,-.2,.12,0),o(.18,.24,.18,i.head,.2,.12,0))}else{let c=n.id==="chicken"?.25:.45,l=r-c-(n.id==="chicken"?.15:.25);o(s,l,n.id==="chicken"?s:s*1.35,i.body,0,c+l/2,0),i.patch&&o(s*.5,l*.55,.02+s*1.36,i.patch,s*.12,c+l*.55,0);let p=n.id==="chicken"?.3:.45,d=o(p,p,p,i.head,0,c+l+p*.25,-(n.id==="chicken"?s*.35:s*.75));i.comb&&(o(.08,.12,.14,i.comb,0,d.position.y+p/2+.05,d.position.z),o(.12,.06,.12,"#D9A63A",0,d.position.y-.02,d.position.z-p/2-.05));let m=n.id==="chicken"?.06:.18,f=n.id==="chicken"?0:s*.45,_=s*.3;for(let[v,g]of n.id==="chicken"?[[-.1,0],[.1,0]]:[[-_,-f],[_,-f],[-_,f],[_,f]]){let x=o(m,c,m,i.leg,v,c/2,g);x.geometry.translate(0,-c/2,0),x.position.y=c,a.push(x)}}return e.userData.legs=a,e}function V0(n){for(let t in Ni){let e=Ni[t];e.color.copy(e.userData.base).multiplyScalar(n)}}function Cc(n,t,e){n.position.set(t.p.x,t.p.y,t.p.z),n.rotation.y=t.yaw;let i=Math.hypot(t.v.x,t.v.z)>.05,s=i?Math.sin(e*8+t.id)*.5:0;if(n.userData.legs.forEach((r,o)=>{r.rotation.x=o%2?s:-s}),t.kind==="quiz"&&(n.position.y+=Math.sin(e*3+t.id)*.05),t.gone){let r=Math.max(.01,1-t.goneT*3);n.scale.setScalar(r),n.rotation.y+=t.goneT*12}}var Rc="bad506a682",Pc=new URLSearchParams(location.search),Vb=720,Ic=5,G0={boat:-.85,minecart:-.6,horse:.75},W0=[[0,0,0,1,.1,1]],X0=[[0,0,0,1,.5,1]],Hb=[[0,0,0,1,1,1]],Gb=[[.3,0,.3,.7,.7,.7]],Wb=20261008,q0=Pc.get("test")==="1"||window.__HW_TEST__===!0,Xb=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,h={touch:Xb,started:!1,paused:!0,overlay:null,p:{x:.5,y:40,z:.5},v:{x:0,y:0,z:0},yaw:0,pitch:-.2,fly:!1,onGround:!1,eyeOff:0,view:"fp",sel:0,time:.08,keys:{},joy:{x:0,y:0,active:!1},jumpHeld:!1,downHeld:!1,mining:{active:!1,src:"center",sx:0,sy:0,k:"",t:0},placeRepeat:0,dirty:new Set,dirtyMeta:!1,frames:[],drops:[],portalLock:!0};function wn(n,t){try{let e=localStorage.getItem(n);return e??t}catch{return t}}function ti(n,t){try{localStorage.setItem(n,t)}catch{}}async function qb(){let n=vc(wn("hw_mode","survival")),t=_0(n),e=!t.creative&&wn("hw_dim","overworld")==="shadow"?"shadow":"overworld",i=u=>e==="shadow"&&/^hw_(furnaces|chests|crops|map|vehicles)$/.test(u)?u+"_s":u,s=e==="shadow"?"hw_chunk_s:":"hw_chunk:";n0(g0(n));let[r,o,a,c,l,p,d,m]=await Promise.all(["data/blocks.json","data/recipes.json","data/mobs.json","data/portals.json","data/structures.json","data/trades.json","data/life.json","data/quests.json"].map(u=>fetch(u,{cache:"no-cache"}).then(M=>M.json()))),f=sm(r),_=o.recipes||[],v=u=>f.maxStack(u),g={};try{let[u,M,E,I,D,W,rt,pt,lt,Mt,Wt,se,ne]=await Promise.all(["hw_meta","hw_player","hw_inventory","hw_coins","hw_furnaces","hw_portal_claimed","hw_quests","hw_chests","hw_crops","hw_ach","hw_map","hw_vehicles","hw_story"].map(Pe=>sf(i(Pe))));g={meta:u,player:M,inv:E,coins:I,furnaces:D,claimed:W,quests:rt,chests:pt,crops:lt,achv:Mt,mapd:Wt,vehs:se,storyd:ne,chunks:await rf(s)}}catch(u){console.warn("save unavailable",u)}let x=g.meta&&g.meta.seed||Wb+mf[n].seedOffset,C=e==="shadow"?x+7777:x,L=e==="shadow"?Bu(C,f):fm(x,f,l),T=Ym(Object.fromEntries(Object.entries(g.chunks||{}).map(([u,M])=>[u.slice(s.length),M]))),S=g.inv?fc(g.inv):Io();t.creative&&!g.inv&&v0.forEach((u,M)=>{f.get(u)&&(S.slots[M]={id:u,count:64})});let R=Nm(g.coins),N=bm(g.achv),b=d.achievements||[],A=qu(g.storyd);!g.storyd&&g.player&&pc(A,m);let U=u=>u==="look"?h.lookAcc||0:u==="walk"?h.walkAcc||0:N.stats[u]||0,B=Bm(),Z=Om(R,{mode:wn("hw_coin_source","local"),member:Fm(window)}),z=new hc(f,g.mapd),O=Hf(g.player&&g.player.hp!=null?g.player.hp:20);h.bed=g.player&&g.player.bed||null,h.horse=g.player&&g.player.horse||null;let k=c.portals||[],j=Array.isArray(g.claimed)?g.claimed.slice():[],$=g.furnaces||{},it=g.quests||{},J=Object.fromEntries(Object.entries(g.chests||{}).map(([u,M])=>[u,fc(M,27)])),nt=g.crops||{};h.armor=g.player&&Array.isArray(g.player.armor)?g.player.armor.slice(0,4):[null,null,null,null],h.armorDur=g.player&&Array.isArray(g.player.armorDur)?g.player.armorDur.slice(0,4):[null,null,null,null];let ot=o.smelt||[],Rt=o.fuelPerCoal||4;g.meta&&typeof g.meta.time=="number"&&(h.time=g.meta.time);let gt=$i("#c"),St=new ic({canvas:gt,antialias:!1,powerPreference:"high-performance"}),Tt={low:{pr:.75,np:120,grain:!1},med:{pr:1,np:300,grain:!0},high:{pr:h.touch?1.5:1.25,np:500,grain:!0}};function _t(){let u=Tt[wn("hw_gfx","high")]||Tt.high;St.setPixelRatio(Math.min(window.devicePixelRatio||1,u.pr)),h.np=u.np;let M=document.getElementById("grain");M&&(M.hidden=!u.grain),document.documentElement.style.setProperty("--bs",{s:.85,m:1,l:1.2}[wn("hw_btn","m")]||1),document.body.classList.toggle("lefty",wn("hw_lefty","off")==="on"),h.invert=wn("hw_invert","off")==="on"}_t();let X=new Kr,et=new ce("#EFEBDD");X.background=et;let ut=new yn(72,1,.08,200);ut.rotation.order="YXZ";let zt=Zm(f),mt=Jm(f,zt),Vt=e0(zt.canvas),oe=new Worker("assets/hw-worker.js?v="+Rc),ft=new gc({scene:X,mats:Vt,reg:f,worker:oe,diffs:T,onDirty:u=>{h.dirty.add(u),(h.mapDirty||(h.mapDirty=new Set)).add(u)}}),ie=Math.max(2,Math.min(6,parseInt(Pc.get("rd")||wn("hw_rd",h.touch?"3":"4"),10)||4));ft.setRenderDistance(ie),ut.far=ie*16+40,ut.updateProjectionMatrix();let Zt=await new Promise(u=>{let M=E=>{E.data.type==="ready"&&(oe.removeEventListener("message",M),u(E.data.spawn))};oe.addEventListener("message",M),oe.postMessage({type:"init",seed:C,dim:e,blocks:r,structures:l,diffs:Object.fromEntries([...T].map(([E,I])=>[E,tf(I)]))})}),Xt=g.player&&g.player.dims&&g.player.dims[e];h.dimPos=g.player&&g.player.dims||{},g.player&&(e==="overworld"||Xt)?Object.assign(h,{p:Xt?{x:Xt.x,y:Xt.y,z:Xt.z}:{x:g.player.x,y:g.player.y,z:g.player.z},yaw:(Xt?Xt.yaw:g.player.yaw)||0,pitch:g.player.pitch||0,fly:!!g.player.fly&&!Xt,sel:g.player.sel|0}):(g.player&&(h.sel=g.player.sel|0),h.p={x:Zt.x,y:Zt.y,z:Zt.z},h.yaw=Math.atan2(-(Zt.stele.x+.5-Zt.x),-(Zt.stele.z+.5-Zt.z)),h.pitch=-.15);let re=new Is(new ro(new tn(1.004,1.004,1.004)),new Rs({color:1382164,transparent:!0,opacity:.45}));re.visible=!1,X.add(re);let Ve=Km().map(u=>new Zn(u)),De=new Fe(new tn(1.01,1.01,1.01),new vn({map:Ve[0],transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));De.visible=!1,X.add(De);let Ce=(u,M)=>{let E=document.createElement("canvas");E.width=E.height=64;let I=E.getContext("2d");I.fillStyle=u,I.beginPath(),I.arc(32,32,28,0,7),I.fill(),M&&(I.globalCompositeOperation="destination-out",I.beginPath(),I.arc(44,26,24,0,7),I.fill());let D=new Zn(E);return D.colorSpace=sn,D},Ne=new Cs(new cs({map:Ce("#F2C46B"),depthWrite:!1,fog:!1})),H=new Cs(new cs({map:Ce("#EDE6D0",!0),depthWrite:!1,fog:!1}));X.add(Ne,H);let He=500,pe=new Float32Array(He*6),F=new Float32Array(He*3),y=new Float32Array(He*3);for(let u=0;u<He;u++)y[u*3]=Math.random()*24-12,y[u*3+1]=Math.random()*16,y[u*3+2]=Math.random()*24-12;let Y=new on;Y.setAttribute("position",new Je(pe,3));let tt=new Is(Y,new Rs({color:9414574,transparent:!0,opacity:.55,depthWrite:!1}));tt.frustumCulled=!1,tt.visible=!1,X.add(tt);let at=new on;at.setAttribute("position",new Je(F,3));let At=new no(at,new lr({color:16052712,size:.13,transparent:!0,opacity:.9,depthWrite:!1}));At.frustumCulled=!1,At.visible=!1,X.add(At),h.weather=Lf();let It=0;function ht(u,M,E){if(tt.visible=E==="rain",At.visible=E==="snow",!!E){It+=u;for(let I=0;I<h.np;I++){let D=y[I*3],W=y[I*3+2],rt=E==="rain"?16:1.6,pt=M.y+10-(y[I*3+1]+It*rt)%16;if(E==="rain"){let lt=I*6;pe[lt]=pe[lt+3]=M.x+D,pe[lt+2]=pe[lt+5]=M.z+W,pe[lt+1]=pt,pe[lt+4]=pt-.45}else{let lt=I*3,Mt=Math.sin(It*.8+I)*.4;F[lt]=M.x+D+Mt,F[lt+1]=pt,F[lt+2]=M.z+W+Mt*.6}}Y.setDrawRange(0,h.np*2),at.setDrawRange(0,h.np),(E==="rain"?Y:at).attributes.position.needsUpdate=!0}}let dt=new pn,Ct=(u,M,E,I,D,W,rt)=>{let pt=new Fe(new tn(u,M,E),new vn({color:I}));return pt.position.set(D,W,rt),pt.userData.base=new ce(I),dt.add(pt),pt},Kt=Ct(.24,.75,.26,"#26302A",-.14,.375,0),Dt=Ct(.24,.75,.26,"#26302A",.14,.375,0);Ct(.56,.7,.3,"#2F5A34",0,1.1,0);let Lt=Ct(.18,.66,.2,"#E7CDA6",-.38,1.12,0),jt=Ct(.18,.66,.2,"#E7CDA6",.38,1.12,0);Ct(.46,.42,.42,"#E7CDA6",0,1.66,0),Ct(.5,.14,.46,"#151714",0,1.9,.02),Ct(.12,.12,.05,"#E0352B",.16,1.92,-.24),[Kt,Dt,Lt,jt].forEach(u=>{u.geometry.translate(0,-u.geometry.parameters.height/2+.05,0),u.position.y+=u.geometry.parameters.height/2-.05}),dt.visible=!1,X.add(dt);let te={},de=u=>te[u]||(te[u]=(()=>{let M=new Image;M.src=mt[u];let E=new mn(M);return E.colorSpace=sn,M.onload=()=>{E.needsUpdate=!0},new cs({map:E,depthWrite:!0,alphaTest:.3})})());function V(u,M,E,I){let D=new Cs(de(u));D.scale.set(.42,.42,1),X.add(D),h.drops.push({id:u,s:D,p:{x:M,y:E,z:I},v:{x:(Math.random()-.5)*2,y:3,z:(Math.random()-.5)*2},age:0})}let Pt=(u,M,E)=>{let I=ft.get(u,M,E);return f.flat.solid[I]===1&&(f.flat.boxes[I]||!0)},ct=Object.fromEntries((a.mobs||[]).map(u=>[u.id,u])),Et=T0(),Nt=new Map,xt=0;function Jt(u,M){for(let E=61;E>0;E--){let I=ft.get(u,E,M);if(f.flat.solid[I])return ft.get(u,E+1,M)||ft.get(u,E+2,M)?null:{y:E+1,n:I};if(f.flat.liquid[I])return null}return null}function $t(u,M,E,I=7){for(let D=-I;D<=I;D++)for(let W=-I;W<=I;W++)for(let rt=-I;rt<=I;rt++)if(f.flat.lightEmit[ft.get(u+rt,M+D,E+W)])return!0;return!1}function Ae(u,M,E,I,D){let W=C0(Et,u,{x:M+.5,y:E,z:I+.5}),rt=k0(u,D);return Nt.set(W.id,rt),X.add(rt),W}let we=new Set;function In(){for(let u of L.villages.around(h.p.x-64,h.p.z-64,h.p.x+64,h.p.z+64))if(!(we.has(u.id)||!ft.ready(u.x,u.z))){we.add(u.id);for(let M=0;M<u.villagers;M++){let E=d0(u.id,M,p),I=u.x+(M%2?2:-2),D=u.z+(M-1),W=Jt(I,D),rt=Ae(ct.villager,I,W?W.y:u.y+1,D,E.prof.color);Object.assign(rt,{home:{x:u.x,z:u.z},village:u.id,role:E})}}}function Gn(u){if(ct.villager&&In(),e==="overworld"&&h.horse&&!h.horseMob&&ct.horse&&ft.ready(h.horse.x,h.horse.z)){let rt=Ae(ct.horse,Math.floor(h.horse.x),h.horse.y,Math.floor(h.horse.z));rt.tame=!0,h.horse.saddled&&sd(rt),h.horseMob=rt}let M=Math.random()*Math.PI*2,E=14+Math.random()*14,I=Math.floor(h.p.x+Math.cos(M)*E),D=Math.floor(h.p.z+Math.sin(M)*E);if(!ft.ready(I,D))return;let W=Jt(I,D);if(W)if(Vo(Et,"animal")<Ec.animal&&W.n===f.num("grass")&&u>.3){let rt=Object.values(ct).filter(Mt=>Mt.kind==="animal"&&(!Mt.biome||Mt.biome===L.biomeOf(I,D))),pt=rt[Math.floor(Math.random()*rt.length)],lt=1+Math.floor(Math.random()*3);for(let Mt=0;Mt<lt&&Vo(Et,"animal")<Ec.animal;Mt++){let Wt=I+Mt%2,se=D+(Mt>>1),ne=Jt(Wt,se);ne&&Ae(pt,Wt,ne.y,se)}}else t.quizMobs&&Vo(Et,"quiz")<Ec.quiz&&R0(u,$t(I,W.y,D))&&ct.quizling&&Ae(e==="shadow"&&ct.shadowling?ct.shadowling:ct.quizling,I,W.y,D)}function Lc(u,M,E){xt+=u,xt>2.5&&h.started&&(xt=0,Gn(e==="shadow"?0:M));for(let I=Et.list.length-1;I>=0;I--){let D=Et.list[I],W=Nt.get(D.id),rt=Math.hypot(D.p.x-h.p.x,D.p.z-h.p.z);if(D.riding){D.p.x=h.p.x,D.p.y=h.p.y,D.p.z=h.p.z,D.yaw=h.yaw,D.v.x=h.v.x,D.v.z=h.v.z,Cc(W,D,E/1e3);continue}if(D.gone){D.goneT=(D.goneT||0)+u,Cc(W,D,E/1e3),D.goneT>.35&&(X.remove(W),Nt.delete(D.id),Et.list.splice(I,1));continue}if(I0(D,M,rt)){D.gone=!0,D.goneT=0,D.village&&we.delete(D.village);continue}if(!ft.ready(D.p.x,D.p.z))continue;P0(D,h.p,u,Math.random),D.v.y-=20*u,D.v.y<-20&&(D.v.y=-20);let pt=oc(D.p,D.v,u,Pt,{w:Math.min(.9,D.def.size[0]),h:D.def.size[1],canStep:!0,grounded:D.onGround});D.onGround=pt.onGround,f.flat.liquid[ft.get(D.p.x,D.p.y+.3,D.p.z)]&&(D.v.y=2),Cc(W,D,E/1e3)}V0(.35+.65*M)}function Ms(u,M,E){let I,D;u==="screen"?(ji.set(M/innerWidth*2-1,-(E/innerHeight)*2+1,.5).unproject(ut).sub(ut.position).normalize(),I={x:ut.position.x,y:ut.position.y,z:ut.position.z},D={x:ji.x,y:ji.y,z:ji.z}):(I=$o(),D=Fc());let W=u==="screen"?ii("screen",M,E):ii("center"),rt=null,pt=h.view==="tp"&&u==="screen"?8:4.5;W&&(pt=Math.min(pt,W.dist+.5));for(let lt of Et.list){if(lt.gone||lt.riding)continue;let Mt=Tc(I,D,lt.p,lt.def.size[0],lt.def.size[1]);Mt!=null&&Mt<pt&&(pt=Mt,rt=lt)}for(let lt of h.vehicles){if(h.ride&&h.ride.veh===lt)continue;let Mt=Tc(I,D,lt.p,1.3,.9);Mt!=null&&Mt<pt&&(pt=Mt,rt=lt.m)}if(h.boss){let lt=Tc(I,D,h.boss.p,3.6,3.6);lt!=null&&lt<pt+1&&(pt=lt,rt=h.boss.m)}return rt}function Tr(){try{return N0(JSON.parse(localStorage.getItem("ke_mistakes")||"{}"))}catch{return[]}}function bs(u){if(u.kind==="vehicle"){kc(u.veh);return}if(u.kind==="boss"){ug();return}if(u.type==="horse"){ng(u);return}if(u.kind==="villager"){if(!t.trading){wt("\u5275\u9020\u6A21\u5F0F\u88E1\u6751\u6C11\u4E0D\u505A\u751F\u610F\uFF0C\u6771\u897F\u90FD\u5728\u80CC\u5305\u76EE\u9304\u88E1");return}Yo(u);return}if(u.kind==="animal"&&S.slots[h.sel]&&S.slots[h.sel].id==="wheat"){t.consume&&jn(S,h.sel,1),q();let E=Date.now();u.love=E,wt(`${u.def.name_zh}\u5403\u4E86\u5C0F\u9EA5\uFF0C\u597D\u958B\u5FC3`);let I=wf(Et.list,u,E);if(I&&Vo(Et,"animal")<Sf){let D=Ae(u.def,Math.floor((u.p.x+I.p.x)/2),Math.floor(u.p.y),Math.floor((u.p.z+I.p.z)/2));Nt.get(D.id).scale.setScalar(.65),u.love=0,I.love=0,wt(`\u751F\u4E86\u4E00\u96BB\u5C0F${u.def.name_zh}\uFF01`),h.stats.bred=(h.stats.bred||0)+1,Ee("bred")}else I&&wt("\u52D5\u7269\u592A\u591A\u4E86\uFF0C\u5148\u4E0D\u751F");return}if(u.kind==="animal"){let E=S.slots[h.sel],I=!!(E&&f.toolOf(E.id)&&f.toolOf(E.id).type==="sword"),D=L0(u,I,Math.random);if(u.v.y=4,u.v.x+=(u.p.x-h.p.x)*1.5,u.v.z+=(u.p.z-h.p.z)*1.5,I){let W=zo(S,h.sel,f);W.broke&&wt(`\u4F60\u7684${f.name(W.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),q()}if(D&&D.drops)for(let W=0;W<D.drops.n;W++)V(D.drops.id,u.p.x,u.p.y+.6,u.p.z);return}if(u.busy)return;u.busy=!0,qn(),document.pointerLockElement&&document.exitPointerLock(),h.overlay="ask";let M=Tr().slice(0,30).sort(()=>Math.random()-.5);df(vt.ov,{ids:M,onDone:(E,I)=>{if(h.overlay=null,u.busy=!1,E&&u.def.tough&&!u.hurt){u.hurt=!0,wt("\u6697\u5F71\u932F\u984C\u602A\u6643\u4E86\u4E00\u4E0B\uFF0C\u518D\u7B54\u5C0D\u4E00\u984C\u5C31\u80FD\u6253\u6557\u5B83\uFF01");return}if(E){let D=D0(!0,I)+(u.def.tough?2:0);Vn(R,D),Nn(),u.gone=!0,u.goneT=0,wt(`\u6253\u6557\u932F\u984C\u602A\uFF01 +${D} \u91D1\u5E63`),h.dirtyMeta=!0,gn(),h.stats.quizWins=(h.stats.quizWins||0)+1,Ee("quiz_wins")}else if(E===!1){let D=h.p.x-u.p.x,W=h.p.z-u.p.z,rt=Math.hypot(D,W)||1;h.v.x=D/rt*7,h.v.z=W/rt*7,h.v.y=4.5,u.p.x-=D/rt*1.5,u.p.z-=W/rt*1.5,wt("\u88AB\u932F\u984C\u602A\u63A8\u958B\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01")}}})}let ei=(u,M,E)=>ft.get(u,M,E),Zi=(u,M,E)=>{let I=f.get(ft.get(u,M,E));return I&&I.rail?{shape:I.rail,powered:!!I.powered}:null},vt=Yb();function wt(u){for(;vt.toasts.children.length>3;)vt.toasts.firstChild.remove();let M=P("div",{class:"toast"},u);vt.toasts.append(M),setTimeout(()=>M.remove(),2200)}function Cr(u){let M=P("div",{class:"toast ach"},P("i",{class:"badge"}),P("span",{},"\u6210\u5C31\u9054\u6210\uFF1A",P("b",{},u.name_zh),u.coins&&t.coins?`\u3000+${u.coins} \u91D1\u5E63`:""));vt.toasts.append(M),setTimeout(()=>M.remove(),3500)}function Ee(u,M=1){Sm(N,u,M),h.dirtyMeta=!0;for(let E of wm(N,b))Cr(E),E.coins&&t.coins&&(Vn(R,E.coins),Nn())}let Ui=()=>Math.max(5,Math.min(100,parseInt(wn("hw_daily_goal","20"),10)||20)),ni=0;function Rr(){let u=Ui();vt.learnCnt.textContent=ni+"/"+u,vt.learnBar.style.width=Math.min(100,ni/u*100)+"%",vt.learnPill.classList.toggle("done",ni>=u)}function Ji(){try{ni=h0()}catch{}Rr()}c0(u=>{let M=ni;Ji(),Ee("answers"),u&&Ee("answers_ok"),M<Ui()&&ni>=Ui()&&wt("\u4ECA\u5929\u7684\u5B78\u7FD2\u76EE\u6A19\u9054\u6210\u4E86\uFF01\u597D\u68D2\uFF01")});function Go(){let u=document.getElementById("pinbox"),M=window.KSParentPin;if(u.innerHTML="",!M||!M.isSet()){u.append(P("div",{class:"pin-ask"},P("p",{},"\u6539\u6BCF\u65E5\u76EE\u6A19\u8981\u5BB6\u9577\u5BC6\u78BC\u3002\u8ACB\u5148\u5230\u5B78\u7FD2\u7AD9\u7684\u300C\u5BB6\u9577\u300D\u9801\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC\u3002"),P("a",{class:"btn ghost",href:"../../#parent"},"\u524D\u5F80\u5BB6\u9577\u9801")));return}let E=P("input",{class:"typein",type:"password",inputmode:"numeric",maxlength:"6",autocomplete:"off",placeholder:"\u5BB6\u9577\u5BC6\u78BC","aria-label":"\u5BB6\u9577\u5BC6\u78BC"}),I=P("input",{class:"typein",type:"number",min:"5",max:"100",value:String(Ui()),"aria-label":"\u6BCF\u65E5\u984C\u6578"}),D=()=>{if(!M.verify(E.value.trim())){wt("\u5BC6\u78BC\u4E0D\u5C0D"),E.value="";return}ti("hw_daily_goal",String(Math.max(5,Math.min(100,+I.value||20)))),Rr(),wt("\u6BCF\u65E5\u76EE\u6A19\u6539\u6210 "+Ui()+" \u984C"),Jf()};[E,I].forEach(W=>W.addEventListener("keydown",rt=>{rt.stopPropagation(),rt.key==="Enter"&&D()})),u.append(P("div",{class:"pin-ask"},P("p",{},"\u5BB6\u9577\uFF1A\u6BCF\u5929\u8981\u7B54\u5E7E\u984C\uFF085\u2013100\uFF09"),P("div",{class:"typerow"},E,I,P("button",{class:"btn",onclick:D},"\u78BA\u5B9A")))),setTimeout(()=>E.focus(),50)}function Wo(u,M,E,I){Ee("placed"),I==="torch"&&Ee("place:torch");let D=h.recentPlaced||(h.recentPlaced=[]);D.push([u,M,E]),D.length>80&&D.shift(),!N.done.house&&Em(D,u,M,E)>=30&&Ee("house")}function Dc(){let u=!1;for(let M of Ge())N.stats["boss:"+M]||(N.stats["boss:"+M]=1,u=!0);u&&Ee("boss",0)}let Xo=R.coins;function Nn(){R.coins>Xo&&cn("coin"),Xo=R.coins,vt.coins.textContent=R.coins}let qo="";function Ki(){let u=Yf(O.hp),M=u.join();M!==qo&&(qo=M,vt.hearts.innerHTML="",u.forEach(E=>vt.hearts.append(P("i",{class:"ht "+E}))))}function w(u){if(h.dead||u<=0||!t.damage)return;let M=u,E=Oo(h.armor,f);if(u=Mf(u,E),E&&(vf(h.armor,h.armorDur,f,M).forEach(W=>wt(`\u4F60\u7684${f.name(W)}\u7A7F\u820A\u4E86\uFF0C\u8F15\u8F15\u88C2\u958B\u56C9\u3002\u518D\u505A\u4E00\u4EF6\u65B0\u7684\u5427\uFF01`)),Re(),h.dirtyMeta=!0),u<=0)return;let I=Wf(O,u);Ki(),h.dirtyMeta=!0,cn("hurt"),vt.flash.classList.remove("on"),vt.flash.offsetWidth,vt.flash.classList.add("on"),I&&G()}function G(){Dr(!0),h.dead=!0,qn(),document.pointerLockElement&&document.exitPointerLock(),h.overlay="dead";let u=vt.ov;u.innerHTML="",u.hidden=!1,u.append(P("div",{class:"panel start"},P("h2",{},"\u4F60\u6688\u5012\u4E86\uFF01"),P("p",{},"\u5225\u64D4\u5FC3\uFF0C\u80CC\u5305\u88E1\u7684\u6771\u897F\u90FD\u9084\u5728\u3002"),P("button",{class:"btn big",onclick:st},h.bed&&e==="overworld"?"\u56DE\u5230\u5E8A\u908A":"\u56DE\u5230\u51FA\u751F\u9EDE")))}function st(){let u=qf(h.bed,Zt,!!h.bed&&e==="overworld");h.p={x:u.x,y:u.y,z:u.z},h.v={x:0,y:0,z:0},h.fallTop=u.y,O.hp=20,h.dead=!1,Ki(),Be(),h.dirtyMeta=!0,wt(h.bed?"\u5728\u5E8A\u908A\u9192\u4F86\u4E86":"\u56DE\u5230\u51FA\u751F\u9EDE\u4E86")}function q(){vt.hotbar.innerHTML="";for(let M=0;M<9;M++){let E=S.slots[M];vt.hotbar.append(P("button",{class:"slot"+(M===h.sel?" on":""),"aria-label":E?f.name(E.id):"\u7A7A\u683C",onpointerdown:I=>{I.stopPropagation(),h.sel=M,q()}},E?P("img",{src:mt[E.id],alt:""}):null,E&&E.count>1?P("span",{class:"cnt"},E.count):null,Q(E),P("span",{class:"key"},M+1)))}let u=S.slots[h.sel];vt.selName.textContent=u?f.name(u.id):""}function Q(u){let M=E0(u,f);return!M||M.left>=M.max?null:P("span",{class:"dur"+(M.frac<.25?" low":"")},P("i",{style:"width:"+Math.round(M.frac*100)+"%"}))}function Ft(u=4){let M=new Set,E=Math.floor(h.p.x),I=Math.floor(h.p.y),D=Math.floor(h.p.z);for(let W=-u;W<=u;W++)for(let rt=-u;rt<=u;rt++)for(let pt=-u;pt<=u;pt++){let lt=ft.get(E+pt,I+W,D+rt);lt&&M.add(f.get(lt).id)}return M}let Gt=()=>({near:Ft(),owned:new Set(R.owned)}),Ut=-1,Ht=null,Yt=null,ue=u=>u==="inv"?S:u==="chest"?J[Yt]:null,me=(u,M)=>u==="armor"?h.armor[M]?{id:h.armor[M],count:1,dur:h.armorDur[M]}:null:ue(u).slots[M];function qt(u,M,E){if(!Ht){me(u,M)&&(Ht={c:u,i:M}),E();return}let I=Ht;if(Ht=null,I.c===u&&I.i===M){E();return}if(u==="armor"||I.c==="armor"){let[D,W,rt,pt]=u==="armor"?[I.c,I.i,u,M]:[u,M,I.c,I.i];if(D==="armor"){E();return}let lt=ue(D),Mt=lt.slots[W],Wt=Mt&&f.get(Mt.id),se=h.armor[pt];if(Mt&&!(Wt.armor&&Wt.armor.slot===pt)){wt("\u9019\u500B\u4E0D\u80FD\u7A7F\u5728\u9019\u88E1"),E();return}let ne=h.armorDur[pt],Pe=se?Number.isFinite(ne)?{id:se,count:1,dur:ne}:{id:se,count:1}:null;Mt?(h.armor[pt]=Mt.id,h.armorDur[pt]=Number.isFinite(Mt.dur)?Mt.dur:null,Mt.count>1?(Mt.count--,Pe&&Sn(lt,se,1,v)):lt.slots[W]=Pe):se&&(h.armor[pt]=null,h.armorDur[pt]=null,lt.slots[W]=Pe),Re(),h.dirtyMeta=!0,q(),E();return}I.c===u?Hu(ue(u),I.i,M,v):Wu(ue(I.c),I.i,ue(u),M,v),h.dirtyMeta=!0,q(),E()}let ye=(u,M,E,I="")=>{let D=me(u,M),W=Ht&&Ht.c===u&&Ht.i===M;return P("button",{class:"slot"+(W?" pick":"")+I,title:D?f.name(D.id):"",onclick:()=>qt(u,M,E)},D?P("img",{src:mt[D.id],alt:""}):null,D&&D.count>1?P("span",{class:"cnt"},D.count):null,Q(D))},Ze=["\u982D","\u8EAB","\u817F","\u8173"];function ke(u){let M=Oo(h.armor,f);return P("div",{class:"armor-row"},Ze.map((E,I)=>P("div",{class:"armor-slot"},ye("armor",I,u),P("small",{},E))),P("small",{class:"muted"},`\u8B77\u7532 ${M} \u9EDE\uFF08\u53D7\u50B7\u5C11 ${Math.min(80,M*4)}%\uFF09`))}function Re(){if(vt.armor){let u=Oo(h.armor,f);vt.armor.textContent=u?`\u8B77\u7532 ${u}`:""}}function Qe(){let u=vt.ov;u.innerHTML="",u.hidden=!1;let M=J[Yt]||(J[Yt]=Io(27)),E=P("div",{class:"inv-grid"});for(let W=0;W<27;W++)E.append(ye("chest",W,Qe));let I=P("div",{class:"inv-grid"});for(let W=9;W<36;W++)I.append(ye("inv",W,Qe));let D=P("div",{class:"inv-grid hbrow"});for(let W=0;W<9;W++)D.append(ye("inv",W,Qe," hb"));return u.append(P("div",{class:"panel inv"},P("div",{class:"p-head"},P("h2",{},"\u7BB1\u5B50"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Be},"\xD7")),P("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u642C\u904E\u53BB\uFF08\u7BB1\u5B50 \u2194 \u80CC\u5305\uFF09\u3002"),E,P("h3",{},"\u80CC\u5305"),I,D)),M}function kt(){let u=vt.ov;u.innerHTML="",u.hidden=!1;let M=P("div",{class:"inv-grid"}),E=pt=>ye("inv",pt,kt,pt<9?" hb":"");for(let pt=9;pt<36;pt++)M.append(E(pt));let I=P("div",{class:"inv-grid hbrow"});for(let pt=0;pt<9;pt++)I.append(E(pt));let D=P("div",{class:"craft"},P("h3",{},"\u5408\u6210"));if(t.creative){let pt=P("div",{class:"craft"},P("h3",{},"\u65B9\u584A\u76EE\u9304\uFF08\u7121\u9650\uFF09"),P("p",{class:"muted"},"\u9EDE\u4E00\u4E0B\u5C31\u653E\u9032\u5FEB\u6377\u5217\u76EE\u524D\u9078\u7684\u90A3\u683C\u3002")),lt=P("div",{class:"cat-grid"});y0(f).forEach(Mt=>lt.append(P("button",{class:"slot",title:f.name(Mt),onclick:()=>{S.slots[h.sel]={id:Mt,count:64},h.dirtyMeta=!0,q(),kt(),wt(`${f.name(Mt)} \u653E\u9032\u7B2C ${h.sel+1} \u683C`)}},P("img",{src:mt[Mt],alt:""})))),pt.append(lt),u.append(P("div",{class:"panel inv"},P("div",{class:"p-head"},P("h2",{},"\u80CC\u5305\uFF08\u5275\u9020\u6A21\u5F0F\uFF09"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Be},"\xD7")),P("div",{class:"inv-wrap"},P("div",{},P("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002"),M,I),pt)));return}let W=Gt(),rt={needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"};_.forEach(pt=>{let lt=dc(S,pt,W),Mt=lt.ok;pt.blueprint&&lt.reason==="blueprint"&&!Object.keys(pt.in).some(Wt=>Wt!=="stick"&&xi(S,Wt)>0)||D.append(P("div",{class:"rcp"+(Mt?"":" no")},P("img",{src:mt[pt.out.id],alt:""}),P("div",{class:"rcp-t"},P("b",{},`${pt.name_zh} \xD7${pt.out.count}`),P("small",{},Object.keys(pt.in).map(Wt=>`${f.name(Wt)} ${xi(S,Wt)}/${pt.in[Wt]}`).join("\u3001")+(rt[lt.reason]?"\u3000\xB7 "+rt[lt.reason]:""))),P("button",{class:"btn small",onclick:()=>{let Wt=Gu(S,pt,v,Gt());Wt.ok?(wt(`\u505A\u597D\u4E86\uFF1A${pt.name_zh} \xD7${pt.out.count}`),h.dirtyMeta=!0,Ee("craft:"+pt.out.id)):wt({full:"\u80CC\u5305\u6EFF\u4E86",needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"}[Wt.reason]||"\u6750\u6599\u4E0D\u5920"),kt(),q()}},"\u88FD\u4F5C")))}),u.append(P("div",{class:"panel inv"},P("div",{class:"p-head"},P("h2",{},"\u80CC\u5305"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Be},"\xD7")),P("div",{class:"inv-wrap"},P("div",{},P("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002\u4E0A\u9762\u662F\u76D4\u7532\uFF1A\u628A\u76D4\u7532\u9EDE\u5230\u5C0D\u7684\u683C\u5B50\u5C31\u7A7F\u4E0A\u3002"),ke(kt),M,I),D)))}let fn=Pm(f);function ve(){let u=vt.ov;u.innerHTML="",u.hidden=!1;let M=P("div",{class:"shop"}),E=z0(k,Ge());fn.filter(I=>!I.id.startsWith("portal_")||E&&I.id===E.block).forEach(I=>M.append(P("div",{class:"offer"+(I.locked?" locked":"")},P("img",{src:mt[I.id],alt:""}),P("div",{class:"of-t"},P("b",{},`${I.name_zh}${I.qty>1?" \xD7"+I.qty:""}`),P("small",{},I.locked?`\uFF08${I.locked}\uFF09`:`${I.price} \u91D1\u5E63${I.desc?"\u3000"+I.desc:""}`)),Sr(R,I.id)?P("span",{class:"owned"},"\u5DF2\u64C1\u6709"):P("button",{class:"btn small",disabled:I.locked?!0:null,onclick:()=>Pn(I)},I.locked?"\u672A\u958B\u653E":"\u8CFC\u8CB7")))),u.append(P("div",{class:"panel"},P("div",{class:"p-head"},P("h2",{},"\u5546\u5E97\u3000",P("span",{class:"coin"}),` ${R.coins}`),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Be},"\xD7")),P("p",{class:"muted"},"\u91D1\u5E63\u600E\u9EBC\u4F86\uFF1F\u53BB\u300C\u7DF4\u7FD2\u77F3\u7891\u300D\u7B54\u82F1\u6587\u984C\uFF1A\u7B54\u5C0D 1 \u679A\u3001\u6253\u5B57\u984C 2 \u679A\u3002"),M))}function Pn(u){let M=Lm(R,S,u,v);M.ok?(Ee("bought"),Ee("buy:"+u.id),wt(u.blueprint?`\u62FF\u5230 ${u.name_zh}\uFF01\u53BB\u5DE5\u4F5C\u53F0\u505A\u505A\u770B`:`\u8CB7\u5230 ${u.name_zh} \xD7${u.qty}`),h.dirtyMeta=!0,Nn(),q(),gn()):wt({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",locked:"\u9084\u6C92\u958B\u653E",owned:"\u5DF2\u7D93\u6709\u4E86"}[M.reason]||"\u8CB7\u4E0D\u4E86"),ve()}let An=null;function Un(){let u=vt.ov,M=$[An]||($[An]=Ff());u.innerHTML="",u.hidden=!1;let E=M.jobs[0],I=P("div",{class:"shop"});ot.forEach(W=>{let rt=xi(S,W.in);I.append(P("div",{class:"offer"+(rt?"":" locked")},P("img",{src:mt[W.in],alt:""}),P("div",{class:"of-t"},P("b",{},`${f.name(W.in)} \u2192 ${f.name(W.out)}`),P("small",{},`\u6709 ${rt} \u500B \xB7 \u6BCF\u500B ${W.time} \u79D2`)),P("button",{class:"btn small",onclick:()=>{let pt=Of(M,S,W,Rt);pt.ok||wt(pt.reason==="fuel"?"\u8981\u653E\u7164\u70AD\u7576\u71C3\u6599":"\u6C92\u6709\u6750\u6599"),h.dirtyMeta=!0,q(),Un()}},"\u653E\u9032\u53BB")))});let D=Object.values(M.done).reduce((W,rt)=>W+rt,0);u.append(P("div",{class:"panel"},P("div",{class:"p-head"},P("h2",{},"\u7194\u7210"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Be},"\xD7")),P("p",{class:"muted"},`\u71C3\u6599\u9084\u80FD\u71D2 ${Math.max(0,M.fuel-M.jobs.length)} \u500B\uFF08\u80CC\u5305\u7164\u70AD ${xi(S,"coal")}\uFF1B1 \u500B\u7164\u70AD\u71D2 ${Rt} \u500B\uFF09`),P("div",{class:"furnace-st"},E?`\u6B63\u5728\u71D2\uFF1A${f.name(E.in)}\uFF08\u9084\u8981 ${Math.ceil(E.left)} \u79D2\uFF0C\u6392\u968A ${M.jobs.length} \u500B\uFF09`:"\u7210\u5B50\u7A7A\u8457"),P("div",{class:"row"},P("button",{class:"btn",disabled:D?null:!0,onclick:()=>{let W=zf(M,S,v);W&&(wt(`\u62FF\u51FA ${W} \u500B`),Ee("smelted",W)),h.dirtyMeta=!0,q(),Un()}},`\u62FF\u51FA\u4F86\uFF08${D}\uFF09`)),I))}let Fi=null,Ie=(u,M)=>{try{return JSON.parse(localStorage.getItem(u)||"null")||M}catch{return M}},Ge=()=>B0(Ie("hw_portal_rewards",[]),Ie("hi_save",null),k),_i='<svg viewBox="0 0 64 64" width="72" height="72" aria-hidden="true"><path d="M20 30v-8a12 12 0 0 1 24 0v8h-6v-8a6 6 0 0 0-12 0v8z" fill="#26302A"/><polygon points="12,30 52,28 54,58 10,60" fill="#E0352B"/><polygon points="12,30 52,28 50,34 14,35" fill="rgba(0,0,0,.15)"/><circle cx="32" cy="44" r="4" fill="#EFEBDD"/><rect x="30" y="44" width="4" height="9" fill="#EFEBDD"/></svg>';function Oe(){let u=k.find(D=>D.map===Fi),M=vt.ov;if(M.innerHTML="",M.hidden=!1,!u){Be();return}let E=Object.keys(u.reward.items).map(D=>`${f.name(D)} \xD7${u.reward.items[D]}`).join("\u3001"),I=Zf(u.map,k,Ge());if(!I.ok){M.append(P("div",{class:"panel start"},P("div",{class:"p-head"},P("h2",{},"\u50B3\u9001\u9580\u30FB"+u.name_zh),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Be},"\xD7")),P("div",{class:"padlock",html:_i}),P("p",{class:"big"},`\u5148\u6253\u5012 ${I.need.boss_zh} \u624D\u80FD\u9032\u5165`),P("p",{class:"muted"},`\u5F9E\u300C${I.need.name_zh}\u300D\u50B3\u9001\u9580\u9032\u53BB\uFF0C\u6253\u5012 ${I.need.boss_zh}\uFF0C\u9019\u500B\u50B3\u9001\u9580\u5C31\u6703\u6253\u958B\u3002`),P("div",{class:"row"},P("button",{class:"btn ghost",onclick:Be},"\u77E5\u9053\u4E86"))));return}M.append(P("div",{class:"panel start"},P("div",{class:"p-head"},P("h2",{},"\u50B3\u9001\u9580\u30FB"+u.name_zh),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Be},"\xD7")),P("p",{},`\u7A7F\u904E\u50B3\u9001\u9580\u5230\u52C7\u8005\u5CF6\u7684\u300C${u.name_zh}\u300D\u5192\u96AA\u3002\u6253\u5012\u90A3\u88E1\u7684 Boss\uFF0C\u56DE\u4F86\u53EF\u4EE5\u9818\uFF1A${u.reward.coins} \u91D1\u5E63\u3001${E}\u3002`),P("p",{class:"muted"},"\u4F60\u5728\u65B9\u584A\u4E16\u754C\u7684\u6771\u897F\u90FD\u6703\u81EA\u52D5\u5B58\u597D\u3002"),P("div",{class:"row"},P("button",{class:"btn big",onclick:async()=>{await gn(),h.leaving=U0(u.map),location.href=h.leaving}},"\u9032\u5165"),P("button",{class:"btn ghost",onclick:Be},"\u5148\u4E0D\u8981"))))}function Wn(){if(!t.portals)return 0;let u;try{u=JSON.parse(localStorage.getItem("hw_portal_rewards")||"[]")}catch{u=[]}let M=F0(u,j);for(let E of M){let I=O0(E,k,S,R,v);if(j.push(E.id),!!I.ok){for(let D in I.leftovers)for(let W=0;W<I.leftovers[D];W++)V(D,h.p.x,h.p.y+1,h.p.z);wt(`\u5F9E${I.name_zh}\u5E36\u56DE\u4F86\uFF1A${I.coins} \u91D1\u5E63\u3001${Object.keys(I.items).map(D=>f.name(D)+" \xD7"+I.items[D]).join("\u3001")}`)}}return M.length&&(Nn(),q(),h.dirtyMeta=!0,gn()),Dc(),M.length}let Xn=null;function Yo(u){Xn=u,u.busy=!0,dn("trade")}function Nc(){let u=Xn,M=vt.ov;if(!u)return Be();M.innerHTML="",M.hidden=!1;let E=u.role,I=yc(),D=P("div",{class:"shop"});E.prof.offers.forEach(rt=>{let pt=rt.blueprint||rt.give,lt=!!rt.blueprint,Mt=lt&&f.blueprints.find(se=>se.id===rt.blueprint),Wt=lt&&Sr(R,rt.blueprint);D.append(P("div",{class:"offer"},P("img",{src:mt[pt],alt:""}),P("div",{class:"of-t"},P("b",{},lt?Mt.name_zh:`${f.name(pt)}${rt.count>1?" \xD7"+rt.count:""}`),P("small",{},`${rt.price} \u91D1\u5E63${lt?"\u3000"+(Mt.desc||""):""}`)),Wt?P("span",{class:"owned"},"\u5DF2\u64C1\u6709"):P("button",{class:"btn small",onclick:()=>{let se=p0(R,S,rt,v);se.ok?(cn("trade"),Ee("traded"),Ee("bought"),wt(lt?`\u62FF\u5230 ${Mt.name_zh}\uFF01`:`\u8CB7\u5230 ${f.name(pt)} \xD7${rt.count}`),h.dirtyMeta=!0,Nn(),q(),gn()):wt({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u6216\u63A5\u82F1\u6587\u59D4\u8A17\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",owned:"\u5DF2\u7D93\u6709\u4E86"}[se.reason]||"\u8CB7\u4E0D\u4E86"),Nc()}},"\u8CFC\u8CB7")))});let W=P("div",{class:"quests"});E.quests.forEach(rt=>{let pt=pf(it,rt,I),lt=Object.keys(rt.reward.items||{}).map(Mt=>`${f.name(Mt)} \xD7${rt.reward.items[Mt]}`).join("\u3001");W.append(P("div",{class:"offer quest"+(pt?" locked":"")},P("div",{class:"of-t"},P("b",{},"\u82F1\u6587\u59D4\u8A17\uFF1A"+rt.title_zh),P("small",{},`${rt.desc}\uFF0C\u7B54\u5C0D ${rt.need} \u984C \u2192 ${rt.reward.coins} \u91D1\u5E63\u3001${lt}`)),pt?P("span",{class:"owned"},"\u4ECA\u5929\u5B8C\u6210\u4E86"):P("button",{class:"btn small",onclick:()=>{h.overlay="quest",f0(vt.ov,{quest:rt,onDone:Mt=>{if(h.overlay="trade",Mt>=0){let Wt=m0(it,rt,Mt,I,R,S,v);if(Wt.ok){for(let se in Wt.leftovers)for(let ne=0;ne<Wt.leftovers[se];ne++)V(se,h.p.x,h.p.y+1,h.p.z);wt(`\u59D4\u8A17\u5B8C\u6210\uFF01 +${Wt.coins} \u91D1\u5E63\u3001${lt}`),Nn(),q(),h.dirtyMeta=!0,gn(),h.stats.quests=(h.stats.quests||0)+1,Ee("quests")}else wt(`\u7B54\u5C0D ${Mt} \u984C\uFF0C\u8981 ${rt.need} \u984C\u624D\u7B97\u5B8C\u6210\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01`)}Nc()}})}},"\u63A5\u59D4\u8A17")))}),M.append(P("div",{class:"panel"},P("div",{class:"p-head"},P("h2",{},`\u6751\u6C11\u30FB${E.prof.name_zh}\u3000`,P("span",{class:"coin"}),` ${R.coins}`),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Be},"\xD7")),P("h3",{},"\u4EA4\u6613"),D,P("h3",{},"\u82F1\u6587\u59D4\u8A17"),P("p",{class:"muted"},"\u6BCF\u500B\u59D4\u8A17\u6BCF\u5929\u53EF\u4EE5\u9818\u4E00\u6B21\u734E\u3002"),W))}function Jf(){let u=vt.ov;u.innerHTML="",u.hidden=!1;let M=P("b",{},ft.rd),E=P("input",{type:"range",min:2,max:6,step:1,value:ft.rd,oninput:I=>{M.textContent=I.target.value},onchange:I=>{let D=+I.target.value;ft.setRenderDistance(D),ut.far=D*16+40,ut.updateProjectionMatrix(),ti("hw_rd",D)}});u.append(P("div",{class:"panel"},P("div",{class:"p-head"},P("h2",{},"\u8A2D\u5B9A"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Be},"\xD7")),P("label",{class:"set"},"\u8996\u91CE\u8DDD\u96E2\uFF08\u5340\u584A\uFF09",M,E),P("label",{class:"set"},"\u756B\u8CEA",P("select",{onchange:I=>{ti("hw_gfx",I.target.value),_t()}},[["low","\u7701\u96FB\uFF08iPad \u6BD4\u8F03\u9806\uFF09"],["med","\u4E00\u822C"],["high","\u6E05\u695A"]].map(([I,D])=>P("option",{value:I,selected:wn("hw_gfx","high")===I?!0:null},D)))),P("label",{class:"set"},"\u6309\u9215\u5927\u5C0F",P("select",{onchange:I=>{ti("hw_btn",I.target.value),_t()}},[["s","\u5C0F"],["m","\u4E2D"],["l","\u5927"]].map(([I,D])=>P("option",{value:I,selected:wn("hw_btn","m")===I?!0:null},D)))),P("label",{class:"set"},"\u5DE6\u624B\u6A21\u5F0F\uFF08\u6416\u687F\u5728\u53F3\u908A\uFF09",P("input",{type:"checkbox",checked:wn("hw_lefty","off")==="on"?!0:null,onchange:I=>{ti("hw_lefty",I.target.checked?"on":"off"),_t()}})),P("label",{class:"set"},"\u4E0A\u4E0B\u8996\u89D2\u53CD\u8F49",P("input",{type:"checkbox",checked:wn("hw_invert","off")==="on"?!0:null,onchange:I=>{ti("hw_invert",I.target.checked?"on":"off"),_t()}})),P("label",{class:"set"},"\u97F3\u6A02",P("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().music:.35,oninput:I=>wc({music:+I.target.value,muted:!1})})),P("label",{class:"set"},"\u97F3\u6548",P("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().sfx:.7,oninput:I=>{wc({sfx:+I.target.value,muted:!1}),cn("place","wood")}})),t.creative?P("label",{class:"set"},"\u5929\u6C23\uFF08\u4E0B\u96E8\u3001\u4E0B\u96EA\uFF09",P("input",{type:"checkbox",checked:wn("hw_weather","on")!=="off"?!0:null,onchange:I=>ti("hw_weather",I.target.checked?"on":"off")})):null,P("p",{class:"muted"},"iPad \u5EFA\u8B70 3\uFF1B\u5361\u5361\u7684\u5C31\u8ABF\u5C0F\u3002"),P("div",{class:"row"},P("button",{class:"btn ghost",onclick:$0},"\u532F\u51FA\u4E16\u754C\uFF08\u5099\u4EFD\u6A94\uFF09"),P("label",{class:"btn ghost"},"\u532F\u5165\u4E16\u754C",P("input",{type:"file",accept:".json,application/json",hidden:!0,onchange:I=>{I.target.files[0]&&Z0(I.target.files[0])}}))),P("div",{class:"row"},P("button",{class:"btn ghost",onclick:J0},"\u91CD\u7F6E\u4E16\u754C"),t.creative?P("button",{class:"btn",onclick:()=>Uc("survival")},"\u56DE\u5230\u751F\u5B58\u6A21\u5F0F"):P("button",{class:"btn",onclick:Y0},"\u5275\u9020\u6A21\u5F0F\uFF08\u5BB6\u9577\u5BC6\u78BC\uFF09")),P("div",{class:"row"},P("button",{class:"btn ghost",onclick:Go},`\u6BCF\u65E5\u5B78\u7FD2\u76EE\u6A19\uFF1A${Ui()} \u984C\uFF08\u5BB6\u9577\uFF09`)),P("div",{id:"pinbox"}),P("div",{class:"row"},P("button",{class:"btn ghost",onclick:()=>{Yu(A),h.dirtyMeta=!0,Be(),qc(!0)}},"\u91CD\u65B0\u770B\u65B0\u624B\u6559\u5B78")),P("p",{class:"muted"},"\u91CD\u7F6E\u4E16\u754C\u6703\u6E05\u6389\u84CB\u597D\u7684\u65B9\u584A\u3001\u80CC\u5305\u548C\u4F4D\u7F6E\uFF1B\u91D1\u5E63\uFF08\u7B54\u984C\u8CFA\u7684\uFF09\u6703\u4FDD\u7559\u3002"),P("p",{},P("a",{class:"home-link",href:"../../#s/game",onclick:()=>{gn()}},"\u2190 \u56DE\u5C0F\u670B\u53CB\u5B78\u7FD2\u7AD9")),P("p",{class:"muted small"},"\u91D1\u5E63\u4F86\u6E90\uFF1A"+(Z.source==="member"?"\u5B78\u7FD2\u7AD9\u5B78\u7FD2\u5E63":"\u9019\u53F0\u88DD\u7F6E\u7684\u9322\u5305")+"\u3000\u7248\u672C "+Rc)))}async function Uc(u){await gn(),ti("hw_mode",u),h.resetting=!0,location.reload()}function Y0(){let u=document.getElementById("pinbox"),M=window.KSParentPin;if(u.innerHTML="",!M||!M.isSet()){u.append(P("div",{class:"pin-ask"},P("p",{},"\u5275\u9020\u6A21\u5F0F\u8981\u5BB6\u9577\u540C\u610F\u3002\u8ACB\u7238\u7238\u5ABD\u5ABD\u5148\u5230\u5B78\u7FD2\u7AD9\u7684\u300C\u5BB6\u9577\u300D\u9801\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC\u3002"),P("a",{class:"btn ghost",href:"../../#parent"},"\u524D\u5F80\u5BB6\u9577\u9801")));return}let E=P("input",{class:"typein",type:"password",inputmode:"numeric",pattern:"[0-9]*",maxlength:"6",autocomplete:"off",placeholder:"\u5BB6\u9577\u5BC6\u78BC","aria-label":"\u5BB6\u9577\u5BC6\u78BC"}),I=()=>{let D=x0(M,E.value.trim());D.ok?Uc("creative"):(wt(D.reason==="wrong"?"\u5BC6\u78BC\u4E0D\u5C0D":"\u9084\u6C92\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC"),E.value="")};E.addEventListener("keydown",D=>{D.stopPropagation(),D.key==="Enter"&&I()}),u.append(P("div",{class:"pin-ask"},P("p",{},"\u8ACB\u7238\u7238\u5ABD\u5ABD\u8F38\u5165\u5BB6\u9577\u5BC6\u78BC\uFF1A\u5275\u9020\u6A21\u5F0F\u662F\u53E6\u4E00\u500B\u4E16\u754C\uFF0C\u65B9\u584A\u7121\u9650\u3001\u4E0D\u80FD\u8CFA\u91D1\u5E63\u3002"),P("div",{class:"typerow"},E,P("button",{class:"btn",onclick:I},"\u78BA\u5B9A")))),setTimeout(()=>E.focus(),50)}async function Kf(){await gn(!0);let u={};for(let M=0;M<localStorage.length;M++){let E=localStorage.key(M);/^hw_/.test(E)&&E!=="hw_mode"&&(u[E]=localStorage.getItem(E))}return{app:"hero-world",v:1,mode:n,at:new Date().toISOString(),db:await rf(""),ls:u}}async function $0(){try{let u=new Blob([JSON.stringify(await Kf())],{type:"application/json"}),M=P("a",{href:URL.createObjectURL(u),download:"\u65B9\u584A\u4E16\u754C\u5099\u4EFD_"+yc()+".json"});document.body.append(M),M.click(),setTimeout(()=>{URL.revokeObjectURL(M.href),M.remove()},1500),wt("\u5099\u4EFD\u6A94\u4E0B\u8F09\u597D\u4E86\uFF0C\u597D\u597D\u6536\u8457")}catch(u){wt("\u532F\u51FA\u5931\u6557\uFF1A"+u.message)}}async function Z0(u){try{let M=JSON.parse(await u.text());if(!M||M.app!=="hero-world"||!M.db||typeof M.db!="object")throw new Error("\u9019\u4E0D\u662F\u65B9\u584A\u4E16\u754C\u7684\u5099\u4EFD\u6A94");if(!confirm("\u532F\u5165\u6703\u628A\u73FE\u5728\u9019\u500B\u4E16\u754C\u63DB\u6210\u5099\u4EFD\u88E1\u7684\u4E16\u754C\uFF08\u91D1\u5E63\u4E5F\u6703\u63DB\u6210\u5099\u4EFD\u7684\uFF09\uFF0C\u78BA\u5B9A\u55CE\uFF1F"))return;h.resetting=!0,await of([]),await xc(M.db);for(let E in M.ls||{})/^hw_/.test(E)&&E!=="hw_mode"&&ti(E,M.ls[E]);location.reload()}catch(M){h.resetting=!1,wt("\u532F\u5165\u5931\u6557\uFF1A"+(M&&M.name==="QuotaExceededError"?"\u5132\u5B58\u7A7A\u9593\u4E0D\u5920":M.message))}}async function J0(){if(confirm("\u78BA\u5B9A\u8981\u91CD\u7F6E\u4E16\u754C\u55CE\uFF1F\u84CB\u597D\u7684\u6771\u897F\u6703\u5168\u90E8\u6D88\u5931\uFF08\u91D1\u5E63\u4FDD\u7559\uFF09\u3002")){h.resetting=!0,ti("hw_dim","overworld");try{await of(["hw_coins"])}catch(u){console.warn(u)}location.reload()}}function dn(u){document.pointerLockElement&&document.exitPointerLock(),h.overlay=u,qn(),Ee("open:"+u,1),u==="inv"?(Ut=-1,Ht=null,kt()):u==="shop"?ve():u==="set"?Jf():u==="furnace"?Un():u==="portal"?Oe():u==="trade"?Nc():u==="chest"?(Ht=null,Qe()):u==="map"?Wc():u==="ach"?lg():u==="quests"?gg():u==="quiz"&&u0(vt.ov,{onAnswer:()=>Ee("stele_answers"),onReward:M=>{Vn(R,M),Nn(),h.dirtyMeta=!0,gn()},onClose:()=>{h.overlay=null}})}function Be(){vt.ov.hidden=!0,vt.ov.innerHTML="",h.overlay=null,Xn&&(Xn.busy=!1,Xn=null)}let jf=()=>{vt.btnSnd.textContent=Bo()?"\u{1F507}":"\u{1F50A}"};vt.btnSnd.onclick=()=>{bc(),Ef(),jf()},["pointerdown","keydown"].forEach(u=>addEventListener(u,()=>bc(),{capture:!0,once:!0})),jf(),vt.btnInv.onclick=()=>h.overlay==="inv"?Be():dn("inv"),vt.btnShop.onclick=()=>h.overlay==="shop"?Be():dn("shop"),vt.btnSet.onclick=()=>h.overlay==="set"?Be():dn("set"),vt.btnView.onclick=()=>Qf(),vt.bRide.onclick=()=>Dr(),vt.bMap.onclick=()=>h.overlay==="map"?Be():dn("map"),vt.restOk.onclick=()=>{vt.rest.hidden=!0},vt.bQuest.onclick=()=>h.overlay==="quests"?Be():dn("quests"),vt.bAch.onclick=()=>h.overlay==="ach"?Be():dn("ach");function Qf(){h.view=h.view==="fp"?"tp":"fp",wt(h.view==="fp"?"\u7B2C\u4E00\u4EBA\u7A31":"\u7B2C\u4E09\u4EBA\u7A31")}function td(){h.ride||(h.fly=!h.fly,h.v.y=0,vt.root.classList.toggle("flying",h.fly),wt(h.fly?"\u98DB\u884C\uFF1A\u958B\uFF08\u8DF3\uFF1D\u4E0A\u5347\u3001\u4E0B\uFF1D\u4E0B\u964D\uFF09":"\u98DB\u884C\uFF1A\u95DC"))}let ji=new K;function Fc(){let u=Math.cos(h.pitch);return{x:-Math.sin(h.yaw)*u,y:Math.sin(h.pitch),z:-Math.cos(h.yaw)*u}}let $o=()=>({x:h.p.x,y:h.p.y+1.62+h.eyeOff+(h.ride?G0[h.ride.kind]:0),z:h.p.z}),ed=u=>u&&!f.flat.liquid[u],Oc=u=>f.flat.boxes[u]||(f.flat.shape[u]===4?W0:f.flat.shape[u]===8?X0:null);function ii(u,M,E){if(u==="screen"){ji.set(M/innerWidth*2-1,-(E/innerHeight)*2+1,.5).unproject(ut).sub(ut.position).normalize();let rt=ut.position,pt=h.view==="tp"?rt.distanceTo(new K(h.p.x,h.p.y+1.62,h.p.z)):0,lt={x:rt.x,y:rt.y,z:rt.z},Mt={x:ji.x,y:ji.y,z:ji.z};h.lastRay={o:lt,d:Mt};let Wt=vr(lt,Mt,Ic+1+pt,ei,ed,Oc);return Wt&&(Wt.at={x:lt.x+Mt.x*Wt.dist,y:lt.y+Mt.y*Wt.dist,z:lt.z+Mt.z*Wt.dist}),Wt}let I=$o(),D=Fc();h.lastRay={o:I,d:D};let W=vr(I,D,Ic,ei,ed,Oc);return W&&(W.at={x:I.x+D.x*W.dist,y:I.y+D.y*W.dist,z:I.z+D.z*W.dist}),W}function qn(){h.mining.active=!1,h.mining.k="",h.mining.t=0,De.visible=!1}function K0(u,M,E){cn("door");let I=f.get(ft.get(u,M,E)),D=f.get(I.openAs||I.closeAs);if(!D)return;let W=pt=>{let lt=f.get(pt);return lt&&lt.interact==="door"},rt=M;for(;W(ft.get(u,rt-1,E));)rt--;for(let pt=rt;W(ft.get(u,pt,E));pt++)ft.set(u,pt,E,D.n);h.dirtyMeta=!0}let nd=()=>{let u=S.slots[h.sel];return u?f.toolOf(u.id):null};function j0(u){let M=u.n,E=t.creative?{time:t.breakTime,harvest:!1,usesTool:!1,creative:!0}:Ac(f.get(M),nd());if(!ft.set(u.x,u.y,u.z,0))return;B.sendBlock(u.x,u.y,u.z,0);let I=u.x+","+u.y+","+u.z,D=f.get(M);if(J[I]){if(t.drops){for(let lt of J[I].slots)if(lt)for(let Mt=0;Mt<lt.count;Mt++)V(lt.id,u.x+.5,u.y+.4,u.z+.5)}delete J[I]}if(D&&D.crop){if(delete nt[I],t.drops)for(let lt of _f(D.stage|0))for(let Mt=0;Mt<lt.n;Mt++)V(lt.id,u.x+.5,u.y+.3,u.z+.5);h.stats.harvested=(h.stats.harvested||0)+(D.stage===3?1:0),D.stage===3&&Ee("harvested"),h.dirtyMeta=!0;return}let W=E.harvest?f.dropOf(M):null;W&&V(W,u.x+.5,u.y+.4,u.z+.5),t.drops&&D.pattern==="leaves"&&Math.random()<(d.appleChance||.1)?V("apple",u.x+.5,u.y+.4,u.z+.5):!E.harvest&&!E.creative&&wt(`${f.name(M)}\u8981\u7528\u66F4\u597D\u7684\u5DE5\u5177\u6316\uFF0C\u624D\u6703\u6389\u6771\u897F`);let rt=ft.get(u.x,u.y+1,u.z);if(f.flat.plant[rt]){delete nt[u.x+","+(u.y+1)+","+u.z],ft.set(u.x,u.y+1,u.z,0);let lt=t.drops&&f.dropOf(rt);lt&&V(lt,u.x+.5,u.y+1.3,u.z+.5)}if(f.get(M).interact==="door")for(let lt of[-1,1]){let Mt=ft.get(u.x,u.y+lt,u.z);f.get(Mt)&&f.get(Mt).interact==="door"&&ft.set(u.x,u.y+lt,u.z,0)}let pt=u.x+","+u.y+","+u.z;if(h.bed&&h.bed.x===u.x&&h.bed.y===u.y&&h.bed.z===u.z&&(h.bed=null,wt("\u5E8A\u62C6\u6389\u4E86\uFF0C\u91CD\u751F\u9EDE\u6539\u56DE\u51FA\u751F\u9EDE")),$[pt]){let lt=kf($[pt]);for(let Mt in lt)for(let Wt=0;Wt<lt[Mt];Wt++)V(Mt,u.x+.5,u.y+.4,u.z+.5);delete $[pt]}if(E.usesTool){let lt=zo(S,h.sel,f);lt.broke&&wt(`\u4F60\u7684${f.name(lt.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),q()}h.dirtyMeta=!0,h.stats.mined++,cn("break",Ar(D)),Ee("mined"),Ee("mine:"+(D.pattern==="log"?"wood":D.id))}function Ir(u){let M=S.slots[h.sel],E=M&&f.get(M.id);if(E&&E.food)return t.damage?(bf(O,E.food,20)?(cn("eat"),jn(S,h.sel,1),Ki(),q(),h.dirtyMeta=!0,wt(`\u5403\u4E86${E.name_zh}\uFF0C\u597D\u98FD\uFF01`),h.stats.ate=(h.stats.ate||0)+1):wt("\u73FE\u5728\u4E0D\u9913"),!0):(wt("\u5275\u9020\u6A21\u5F0F\u4E0D\u6703\u9913"),!0);if(E&&E.id==="shadow_flint"){if(!t.portals)return wt("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u958B\u6697\u5F71\u50B3\u9001\u9580"),!0;let Bt=f.num("dark_crystal"),Qt=u&&u.n===Bt?zu((Le,Ye,Yn)=>ft.get(Le,Ye,Yn),u.x,u.y,u.z,Bt):null;if(!Qt)return wt("\u5148\u7528 10 \u500B\u6697\u6676\u6392\u4E00\u500B\u6846\uFF08\u88E1\u9762\u7A7A 2 \u683C\u5BEC\u30013 \u683C\u9AD8\uFF09\uFF0C\u518D\u5C0D\u8457\u6846\u9EDE\u706B\u7A2E"),!1;let be=f.num("shadow_portal");for(let Le of Qt)ft.set(Le[0],Le[1],Le[2],be);return Ee("portal_lit"),jn(S,h.sel,1),q(),h.dirtyMeta=!0,wt(e==="shadow"?"\u50B3\u9001\u9580\u4EAE\u4E86\uFF01\u8D70\u9032\u53BB\u5C31\u80FD\u56DE\u5BB6":"\u6697\u5F71\u50B3\u9001\u9580\u4EAE\u4E86\uFF01\u8D70\u9032\u53BB\u5C31\u80FD\u5230\u6697\u5F71\u754C"),!0}if(E&&E.id==="fishing_rod")return h.fish?rg():sg(),!0;if(E&&E.place==="boat"){if(h.ride)return wt("\u5148\u4E0B\u4F86\u518D\u653E"),!0;let Bt=h.lastRay,Qt=Bt&&vr(Bt.o,Bt.d,Ic+1,ei,Le=>f.flat.liquid[Le]||f.flat.solid[Le]);if(!Qt||!f.flat.liquid[Qt.n]||ft.get(Qt.x,Qt.y+1,Qt.z))return wt("\u8239\u8981\u653E\u5728\u6C34\u9762\u4E0A"),!1;h.p={x:Qt.x+.5,y:Qt.y+1-.15,z:Qt.z+.5};let be=Bc("boat",h.p,h.yaw,{y:Qt.y+1});return t.consume&&jn(S,h.sel,1),q(),Lr("boat",{y:Qt.y+1,veh:be}),!0}if(E&&E.place==="minecart"){if(h.ride)return wt("\u5148\u4E0B\u4F86\u518D\u653E"),!0;let Bt=u&&f.get(u.n);if(!Bt||!Bt.rail)return wt("\u7926\u8ECA\u8981\u653E\u5728\u9435\u8ECC\u4E0A"),!1;let Qt=Ru(Bt.rail,u.x,u.y,u.z,-Math.sin(h.yaw),-Math.cos(h.yaw),Ye=>!!Co(Zi,u.x,u.y,u.z,Ye,Bt.rail)),be=cc(Qt),Le=Bc("minecart",{x:be.x,y:be.y+.05,z:be.z},be.yaw,{st:Qt});return t.consume&&jn(S,h.sel,1),q(),Lr("minecart",{st:Qt,veh:Le}),!0}if(!u)return!1;let I=f.get(u.n);if(I&&I.interact==="chest")return cn("chest"),Yt=u.x+","+u.y+","+u.z,dn("chest"),!0;let D=E&&f.toolOf(M.id);if(D&&D.type==="hoe"&&xf(I.id,!ft.get(u.x,u.y+1,u.z)||f.flat.plant[ft.get(u.x,u.y+1,u.z)])){if(ft.set(u.x,u.y+1,u.z,0),ft.set(u.x,u.y,u.z,f.num("farmland")),t.consume){let Bt=zo(S,h.sel,f);Bt.broke&&wt(`\u4F60\u7684${f.name(Bt.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`)}return q(),h.dirtyMeta=!0,!0}if(E&&E.place==="crop")return I.id!=="farmland"||u.face[1]!==1||ft.get(u.x,u.y+1,u.z)?(wt("\u7A2E\u5B50\u8981\u7A2E\u5728\u8015\u5730\u4E0A\uFF08\u5148\u7528\u92E4\u982D\u92E4\u5730\uFF09"),!1):(ft.set(u.x,u.y+1,u.z,f.num("wheat_0")),nt[u.x+","+(u.y+1)+","+u.z]={t:Date.now(),wet:yf(ei,Bt=>f.flat.liquid[Bt]===1,u.x,u.y,u.z)},t.consume&&jn(S,h.sel,1),q(),h.dirtyMeta=!0,h.stats.planted=(h.stats.planted||0)+1,!0);let W=f.get(u.n);if(W&&W.interact==="quiz")return t.coins?(dn("quiz"),!0):(wt("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u8CFA\u91D1\u5E63\uFF0C\u56DE\u751F\u5B58\u6A21\u5F0F\u518D\u4F86\u7B54\u984C\u5427"),!0);let rt=S.slots[h.sel]&&f.get(S.slots[h.sel].id).placeable;if(W&&W.interact==="door")return K0(u.x,u.y,u.z),!0;if(W&&W.interact==="portal"&&!rt&&!t.portals)return wt("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u9032\u50B3\u9001\u9580"),!0;if(W&&W.interact==="portal"&&!rt)return Fi=W.portal,dn("portal"),!0;if(W&&W.interact==="bed"&&!rt&&e==="shadow")return wt("\u6697\u5F71\u754C\u7761\u4E0D\u8457\uFF0C\u5E8A\u53EA\u80FD\u5728\u539F\u672C\u7684\u4E16\u754C\u8A2D\u91CD\u751F\u9EDE"),!0;if(W&&W.interact==="bed"&&!rt)return h.bed={x:u.x,y:u.y,z:u.z},h.dirtyMeta=!0,Ee("bed"),wt("\u91CD\u751F\u9EDE\u8A2D\u597D\u4E86\uFF1A\u6688\u5012\u6703\u56DE\u5230\u9019\u5F35\u5E8A"),!0;if(W&&W.interact==="craft"&&!rt)return dn("inv"),!0;if(W&&W.interact==="furnace"&&!rt)return An=u.x+","+u.y+","+u.z,dn("furnace"),!0;let pt=S.slots[h.sel];if(!pt)return wt("\u5FEB\u6377\u5217\u9019\u683C\u662F\u7A7A\u7684"),!1;let lt=f.get(pt.id);if(!lt||!lt.placeable)return wt(`${f.name(pt.id)} \u4E0D\u80FD\u653E`),!1;if(lt.place==="slab"&&lt.fullAs&&u.n===lt.n&&u.face[1]===1&&ft.set(u.x,u.y,u.z,f.num(lt.fullAs)))return t.consume&&jn(S,h.sel,1),q(),h.stats.placed++,h.dirtyMeta=!0,!0;let Mt=f.flat.plant[u.n]&&!f.flat.plant[lt.n],Wt=Mt?u.x:u.x+u.face[0],se=Mt?u.y:u.y+u.face[1],ne=Mt?u.z:u.z+u.face[2];if(se<0||se>=64)return!1;let Pe=ft.get(Wt,se,ne);if(Pe&&!f.flat.liquid[Pe]&&!(Mt&&f.flat.plant[Pe]))return!1;let Te=.6/2;if(lt.solid&&Wt+1>h.p.x-Te&&Wt<h.p.x+Te&&ne+1>h.p.z-Te&&ne<h.p.z+Te&&se+1>h.p.y&&se<h.p.y+1.8)return!1;if(f.flat.plant[lt.n]&&!f.flat.solid[ft.get(Wt,se-1,ne)])return wt(`${lt.name_zh}\u8981\u7A2E\u5728\u5730\u4E0A`),!1;let en=lt.n;if(lt.place==="slab"){let Bt=u.at?u.at.y-Math.floor(u.at.y):0;(u.face[1]===-1||u.face[1]===0&&Bt>.5)&&f.get(lt.id+"_top")&&(en=f.num(lt.id+"_top"))}else if(lt.place==="stairs"){let Bt=-Math.sin(h.yaw),Qt=-Math.cos(h.yaw),be=Math.abs(Bt)>Math.abs(Qt)?Bt>0?1:3:Qt>0?2:0,Le=f.get(lt.id+["","_e","_s","_w"][be]);Le&&(en=Le.n)}let he=null;if(lt.place==="rail"){if(!f.flat.solid[ft.get(Wt,se-1,ne)])return wt("\u9435\u8ECC\u8981\u653E\u5728\u5730\u4E0A"),!1;let Bt=-Math.sin(h.yaw),Qt=-Math.cos(h.yaw),be=lc(Zi,Wt,se,ne,!!lt.powered,Math.abs(Bt)>Math.abs(Qt)?"e":"n");en=f.num(To(!!lt.powered,be.shape)),he=be.updates}if(!ft.set(Wt,se,ne,en))return!1;if(B.sendBlock(Wt,se,ne,en),he)for(let[Bt,Qt,be,Le]of he){let Ye=Zi(Bt,Qt,be);Ye&&ft.set(Bt,Qt,be,f.num(To(Ye.powered,Le)))}return cn("place",Ar(lt)),lt.interact==="door"&&!ft.get(Wt,se+1,ne)&&ft.set(Wt,se+1,ne,lt.n),t.consume&&jn(S,h.sel,1),h.dirtyMeta=!0,q(),h.stats.placed++,Wo(Wt,se,ne,lt.id),!0}let Pr={},Zo=u=>Pr[u]||(Pr[u]=(()=>{let M=new vn({color:u});return M.userData.base=new ce(u),M})());function Q0(u){let M=new pn,E=(I,D,W,rt,pt,lt,Mt)=>{let Wt=new Fe(new tn(I,D,W),Zo(rt));Wt.position.set(pt,lt,Mt),M.add(Wt)};if(u==="boat"){E(.9,.08,1.5,"#8C6640",0,.04,0);for(let I of[-1,1])E(.08,.3,1.5,"#A97E4E",I*.45,.19,0),E(.9,.3,.08,"#A97E4E",0,.19,I*.75);E(.9,.06,.25,"#C49A63",0,.25,.1)}else{E(.9,.08,1.1,"#5E6660",0,.12,0);for(let I of[-1,1])E(.08,.45,1.1,"#8C8A84",I*.45,.35,0),E(.9,.45,.08,"#8C8A84",0,.35,I*.55),E(.06,.18,.18,"#26302A",I*.47,.1,.35),E(.06,.18,.18,"#26302A",I*.47,.1,-.35)}return M}h.vehicles=[];function Bc(u,M,E,I){let D=Q0(u);D.rotation.order="YXZ",D.position.set(M.x,M.y,M.z),D.rotation.y=E,X.add(D);let W=Object.assign({kind:u,p:{x:M.x,y:M.y,z:M.z},yaw:E,obj:D,hits:0},I);return W.m={kind:"vehicle",veh:W,id:-2},h.vehicles.push(W),W}function zc(u){h.ride||h.dead||(h.p={x:u.p.x,y:u.p.y,z:u.p.z},u.kind==="boat"?Lr("boat",{y:u.y,veh:u}):(u.st.v=0,Lr("minecart",{st:u.st,veh:u})))}function kc(u){if(!(h.ride&&h.ride.veh===u)){if(u.hits++,u.hits<2){wt("\u518D\u6253\u4E00\u4E0B\u5C31\u80FD\u6536\u8D77\u4F86"),u.obj.position.y=u.p.y+.15,setTimeout(()=>{u.obj.position.y=u.p.y},120);return}h.vehicles.splice(h.vehicles.indexOf(u),1),X.remove(u.obj),V(u.kind,u.p.x,u.p.y+.5,u.p.z),h.dirtyMeta=!0,wt(u.kind==="boat"?"\u8239\u6536\u8D77\u4F86\u4E86":"\u7926\u8ECA\u6536\u8D77\u4F86\u4E86")}}let Os=new pn,id=new vn({color:15723485,transparent:!0,opacity:.38,depthWrite:!1}),Vc=[0,1].map(()=>{let u=new Fe(new tn(1,1,1),id);return Os.add(u),u});Os.visible=!1,X.add(Os);function tg(u){let M=S.slots[h.sel],E=M&&f.get(M.id);if(!u||!E||!E.placeable)return null;let I=f.get(u.n);if(I&&["chest","quiz","door"].includes(I.interact))return null;if(E.place==="slab"&&E.fullAs&&u.n===E.n&&u.face[1]===1)return{x:u.x,y:u.y,z:u.z,n:f.num(E.fullAs)};let D=f.flat.plant[u.n]&&!f.flat.plant[E.n],W=D?u.x:u.x+u.face[0],rt=D?u.y:u.y+u.face[1],pt=D?u.z:u.z+u.face[2];if(rt<0||rt>=64)return null;let lt=ft.get(W,rt,pt);if(lt&&!f.flat.liquid[lt]&&!(D&&f.flat.plant[lt]))return null;let Mt=E.n;if(E.place==="slab"){let Wt=u.at?u.at.y-Math.floor(u.at.y):0;(u.face[1]===-1||u.face[1]===0&&Wt>.5)&&f.get(E.id+"_top")&&(Mt=f.num(E.id+"_top"))}else if(E.place==="stairs"){let Wt=-Math.sin(h.yaw),se=-Math.cos(h.yaw),ne=Math.abs(Wt)>Math.abs(se)?Wt>0?1:3:se>0?2:0,Pe=f.get(E.id+["","_e","_s","_w"][ne]);Pe&&(Mt=Pe.n)}else if(E.place==="rail"){if(!f.flat.solid[ft.get(W,rt-1,pt)])return null;let Wt=-Math.sin(h.yaw),se=-Math.cos(h.yaw);Mt=f.num(To(!!E.powered,lc(Zi,W,rt,pt,!!E.powered,Math.abs(Wt)>Math.abs(se)?"e":"n").shape))}return{x:W,y:rt,z:pt,n:Mt}}function eg(u){let M=tg(u);if(!M){Os.visible=!1;return}let E=f.flat.shape[M.n],I=f.flat.boxes[M.n]||(E===4?W0:E===8?X0:E>=1&&E<=3?Gb:Hb);Vc.forEach((D,W)=>{let rt=I[W];D.visible=!!rt,rt&&(D.scale.set((rt[3]-rt[0])*.98,(rt[4]-rt[1])*.98,(rt[5]-rt[2])*.98),D.position.set(M.x+(rt[0]+rt[3])/2,M.y+(rt[1]+rt[4])/2,M.z+(rt[2]+rt[5])/2))}),Os.visible=!0}function sd(u){u.saddled=!0;let M=Nt.get(u.id);if(!M)return;let E=new Fe(new tn(.62,.1,.6),Zo("#5C3A24"));E.position.set(0,1.4,.05),M.add(E)}function Lr(u,M){let E=M.veh?M.veh.obj:null;h.ride=Object.assign({kind:u,obj:E,yaw:M.veh?M.veh.yaw:h.yaw},M),h.fly=!1,vt.root.classList.remove("flying"),h.v={x:0,y:0,z:0},vt.bRide.hidden=!1,qn(),Ee("ride:"+u),Ee("ride"),wt({boat:"\u4E0A\u8239\u4E86\uFF01\u7528\u8D70\u8DEF\u7684\u65B9\u5F0F\u5212\u8239\uFF0C\u6309\u300C\u4E0B\u4F86\u300D\u4E0A\u5CB8",minecart:"\u5750\u4E0A\u7926\u8ECA\uFF01\u5F80\u524D\u63A8\u5C31\u51FA\u767C\uFF0C\u91D1\u8272\u9435\u8ECC\u6703\u52A0\u901F",horse:"\u9A0E\u4E0A\u99AC\u4E86\uFF01\u8DD1\u5F97\u66F4\u5FEB\u3001\u8DF3\u5F97\u66F4\u9AD8"}[u])}function Dr(u){let M=h.ride;if(M){if(h.ride=null,vt.bRide.hidden=!0,M.veh&&(M.veh.p={x:h.p.x,y:h.p.y,z:h.p.z},M.veh.yaw=M.yaw,M.st&&(M.st.v=0,M.veh.st=M.st)),M.kind==="horse"&&(M.m.riding=!1),M.kind==="minecart")h.p.y+=.2;else for(let[E,I]of[[1,0],[-1,0],[0,1],[0,-1],[1.5,0],[-1.5,0],[0,1.5],[0,-1.5]]){let D={x:h.p.x+E,y:Math.floor(h.p.y+.5),z:h.p.z+I};if(dm(D,Pt)&&f.flat.solid[ft.get(D.x,D.y-1,D.z)]){h.p=D;break}}h.v={x:0,y:0,z:0},h.fallTop=h.p.y,u||wt("\u4E0B\u4F86\u4E86")}}function ng(u){let M=S.slots[h.sel];if(!u.tame){M&&(M.id==="wheat"||M.id==="apple")?(t.consume&&jn(S,h.sel,1),q(),u.fed=(u.fed||0)+1,u.fed>=3?(u.tame=!0,h.horseMob=u,h.dirtyMeta=!0,wt("\u99AC\u5152\u8DDF\u4F60\u8B8A\u6210\u597D\u670B\u53CB\u4E86\uFF01\u88DD\u4E0A\u99AC\u978D\u5C31\u80FD\u9A0E")):wt(`\u99AC\u5152\u5403\u5F97\u597D\u958B\u5FC3\uFF08${u.fed}/3\uFF09`)):wt("\u99AC\u5152\u6709\u9EDE\u5BB3\u7F9E\uFF0C\u9935\u7260 3 \u500B\u5C0F\u9EA5\u6216\u860B\u679C\u8A66\u8A66\u770B");return}if(!u.saddled){M&&M.id==="saddle"?(t.consume&&jn(S,h.sel,1),q(),sd(u),h.horseMob=u,h.dirtyMeta=!0,wt("\u88DD\u597D\u99AC\u978D\u4E86\uFF01\u518D\u9EDE\u4E00\u4E0B\u99AC\u5152\u5C31\u80FD\u9A0E\u4E0A\u53BB")):wt("\u8981\u5148\u5E6B\u99AC\u5152\u88DD\u4E0A\u99AC\u978D\uFF08\u5546\u5E97\u6216\u6751\u838A\u7684\u5546\u4EBA\u6709\u8CE3\uFF09");return}h.ride||(u.riding=!0,h.p={x:u.p.x,y:u.p.y,z:u.p.z},Lr("horse",{m:u}),h.stats.rodeHorse=(h.stats.rodeHorse||0)+1)}function ig(u,M,E,I,D,W,rt){let pt=h.ride;if(pt.kind==="boat"){let lt=(I*E+W*M)*7,Mt=(D*E+rt*M)*7,Wt=1-Math.exp(-2.5*u);h.v.x+=(lt-h.v.x)*Wt,h.v.z+=(Mt-h.v.z)*Wt,h.v.y=0;let se=(Te,en)=>f.flat.liquid[ft.get(Te,pt.y-1,en)]===1&&!f.flat.solid[ft.get(Te,pt.y,en)],ne=h.p.x+h.v.x*u,Pe=h.p.z+h.v.z*u;se(ne+Math.sign(h.v.x)*.6,h.p.z)?h.p.x=ne:h.v.x=0,se(h.p.x,Pe+Math.sign(h.v.z)*.6)?h.p.z=Pe:h.v.z=0,h.p.y=pt.y-.15,Math.hypot(h.v.x,h.v.z)>.3&&(pt.yaw=Math.atan2(-h.v.x,-h.v.z))}else{Iu(pt.st,u,E,Zi);let lt=cc(pt.st);h.p.x=lt.x,h.p.z=lt.z,h.p.y=lt.y+.05,pt.yaw=lt.yaw,pt.pitch=lt.pitch,h.v.x=h.v.z=h.v.y=0}h.fallTop=h.p.y}let Hc=(()=>{let u=new pn,M=new Fe(new tn(.16,.1,.16),Zo("#E0352B")),E=new Fe(new tn(.16,.08,.16),Zo("#EFEBDD"));return M.position.y=.05,E.position.y=-.04,u.add(M,E),u.visible=!1,X.add(u),u})();function sg(){let u=h.lastRay,M=u&&vr(u.o,u.d,Ic+3,ei,E=>f.flat.liquid[E]||f.flat.solid[E]);return!M||!f.flat.liquid[M.n]||ft.get(M.x,M.y+1,M.z)?(wt("\u8981\u628A\u9B5A\u7DDA\u7529\u5230\u6C34\u9762\u4E0A"),!1):(h.fish=Lu(Math.random),h.fish.at={x:M.x+.5,y:M.y+1,z:M.z+.5},Hc.visible=!0,wt("\u7529\u7AFF\uFF01\u7B49\u6D6E\u6A19\u5F80\u4E0B\u6C89\uFF0C\u518D\u9EDE\u4E00\u4E0B\u6536\u7DDA"),!0)}function Gc(){h.fish=null,Hc.visible=!1}function rg(){let u=Nu(h.fish);if(Gc(),u!=="catch"){wt("\u592A\u65E9\u6536\u7DDA\u4E86\uFF0C\u9B5A\u9084\u6C92\u4E0A\u9264\uFF0C\u518D\u7529\u4E00\u6B21");return}let M=d.fishing.loot,E=Uu(M,Math.random);if(E.coins&&!t.coins&&(E=M[0]),E.coins)Vn(R,E.coins),Nn(),wt(`\u91E3\u5230\u4E00\u500B\u5C0F\u9322\u888B\uFF01 +${E.coins} \u91D1\u5E63`);else{let I=Sn(S,E.id,E.n,v);for(let D=0;D<I;D++)V(E.id,h.p.x,h.p.y+1,h.p.z);wt(E.treasure?`\u6488\u5230\u5BF6\u7269\uFF1A${f.name(E.id)} \xD7${E.n}\uFF01`:"\u91E3\u5230\u4E00\u689D\u9B5A\uFF01")}t.consume&&zo(S,h.sel,f).broke&&wt("\u91E3\u7AFF\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u652F\u5427\uFF01"),q(),h.dirtyMeta=!0,cn("pickup"),Ee("fish"),E.treasure&&Ee("treasure")}let Qi=2,Jo=wn("hw_minimap","on")!=="off";function og(u){Jo=u,ti("hw_minimap",u?"on":"off"),vt.mini.hidden=!u}vt.mini.hidden=!Jo;function ag(){let u=vt.mini,M=u.getContext("2d");M.fillStyle="#D9D3C0",M.fillRect(0,0,u.width,u.height),z.draw(M,h.p.x,h.p.z,2,u.width,u.height),Ou(M,u.width/2,u.height/2,h.yaw,7,"#E0352B")}function Wc(){let u=vt.ov;u.innerHTML="",u.hidden=!1;let M=Math.max(240,Math.min(innerWidth-60,760)),E=Math.max(200,Math.min(innerHeight-200,540)),I=P("canvas",{class:"bigmap",width:M,height:E}),D=I.getContext("2d");D.fillStyle="#D9D3C0",D.fillRect(0,0,M,E);let{x0:W,z0:rt}=z.draw(D,h.p.x,h.p.z,Qi,M,E),pt=(ne,Pe)=>[(ne-W)*Qi,(Pe-rt)*Qi],lt=(ne,Pe,Te,en,he)=>{let[Bt,Qt]=pt(ne,Pe);Bt<-20||Qt<-20||Bt>M+20||Qt>E+20||(D.fillStyle=en,D.strokeStyle=en,D.lineWidth=3,he==="roof"?(D.beginPath(),D.moveTo(Bt-8,Qt+1),D.lineTo(Bt,Qt-7),D.lineTo(Bt+8,Qt+1),D.fill(),D.fillRect(Bt-5,Qt+1,10,7)):he==="ring"?(D.beginPath(),D.arc(Bt,Qt,6,0,7),D.stroke()):D.fillRect(Bt-5,Qt-5,10,10),D.font="bold 12px sans-serif",D.textAlign="center",D.strokeStyle="#EFEBDD",D.strokeText(Te,Bt,Qt-11),D.fillStyle="#26302A",D.fillText(Te,Bt,Qt-11))},Mt=Math.max(M,E)/Qi;for(let ne of L.villages.around(h.p.x-Mt,h.p.z-Mt,h.p.x+Mt,h.p.z+Mt))z.explored(ne.x,ne.z)&&lt(ne.x,ne.z,"\u6751\u838A","#8C5A3A","roof");for(let ne of z.portals.values())lt(ne.x+.5,ne.z+.5,ne.name.replace("\u50B3\u9001\u9580\u30FB",""),"#5B3F8C","ring");lt(Zt.x,Zt.z,"\u51FA\u751F\u9EDE","#3E6B3A"),h.bed&&lt(h.bed.x+.5,h.bed.z+.5,"\u5E8A","#E0352B");let[Wt,se]=pt(h.p.x,h.p.z);Ou(D,Wt,se,h.yaw,9,"#E0352B"),u.append(P("div",{class:"panel map"},P("div",{class:"p-head"},P("h2",{},"\u5730\u5716"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Be},"\xD7")),I,P("div",{class:"row"},P("button",{class:"btn small",onclick:()=>{Qi=Math.min(6,Qi+1),Wc()}},"\u653E\u5927"),P("button",{class:"btn small",onclick:()=>{Qi=Math.max(1,Qi-1),Wc()}},"\u7E2E\u5C0F"),P("label",{class:"set inline"},P("input",{type:"checkbox",checked:Jo?!0:null,onchange:ne=>og(ne.target.checked)}),"\u89D2\u843D\u5C0F\u5730\u5716")),P("p",{class:"muted"},"\u53EA\u756B\u5F97\u51FA\u4F60\u53BB\u904E\u7684\u5730\u65B9\u3002\u7D05\u8272\u7BAD\u982D\u662F\u4F60\uFF1B\u5713\u5708\u662F\u50B3\u9001\u9580\u3002")))}function lg(){let u=vt.ov;u.innerHTML="",u.hidden=!1;let M=b.filter(I=>N.done[I.id]).length,E=P("div",{class:"ach-list"});b.forEach(I=>{let D=!!N.done[I.id];E.append(P("div",{class:"ach-item"+(D?" done":"")},P("i",{class:"badge"}),P("div",{},P("b",{},I.name_zh),P("small",{},I.desc_zh+(D?"\u3000\u2713":`\uFF08${Am(N,I)}/${I.need}\uFF09`)+(I.coins?`\u3000\u734E\u52F5 ${I.coins} \u91D1\u5E63`:"")))))}),u.append(P("div",{class:"panel"},P("div",{class:"p-head"},P("h2",{},`\u6210\u5C31\u3000${M} / ${b.length}`),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Be},"\xD7")),P("p",{class:"muted"},t.coins?"\u6709\u4E9B\u6210\u5C31\u6703\u9001\u91D1\u5E63\u3002":"\u5275\u9020\u6A21\u5F0F\u7684\u6210\u5C31\u4E0D\u9001\u91D1\u5E63\u3002"),E))}async function cg(u){h.travelling||(h.travelling=!0,Dr(!0),Gc(),qn(),wt(u==="shadow"?"\u7A7F\u904E\u6697\u5F71\u50B3\u9001\u9580\u2026":"\u56DE\u5230\u539F\u672C\u7684\u4E16\u754C\u2026"),await gn(!0),ti("hw_dim",u),h.resetting=!0,location.reload())}function Xc(){let u=h.boss;u&&(vt.bossName.textContent=`\u932F\u984C\u9B54\u9F8D\u30FB\u7B2C ${u.st.phase+1}\uFF0F3 \u968E\u6BB5\uFF1A${Uo[u.st.phase].name_zh}`,vt.bossHp.style.width=Math.max(0,u.st.hp/No*100)+"%")}function hg(u){if(e!=="shadow"||N.stats.dragon)return;let M=gi,E=Math.hypot(h.p.x-M.x,h.p.z-M.z);if(!h.boss&&E<60&&ft.ready(M.x,M.z)){let W=Gm();X.add(W),h.boss={g:W,st:Vm(),p:{x:M.x+.5,y:mi+1.5,z:M.z+.5},m:{kind:"boss",id:-1},t:0}}let I=h.boss;if(!I)return;I.t+=u,I.g.position.set(I.p.x,I.p.y+Math.sin(I.t*1.6)*.25,I.p.z),I.g.rotation.y=Math.atan2(-(h.p.x-I.p.x),-(h.p.z-I.p.z)),Wm(I.g,I.t,u);let D=E<28;D===vt.bossbar.hidden&&(vt.bossbar.hidden=!D,D&&(Xc(),I.greeted||(I.greeted=!0,wt("\u932F\u984C\u9B54\u9F8D\u51FA\u73FE\u4E86\uFF01\u9EDE\u7260\u5C31\u6703\u51FA\u984C\uFF0C\u7B54\u5C0D\u624D\u6253\u5F97\u5230"))))}function ug(){let u=h.boss;if(!u||u.busy)return;u.busy=!0,qn(),document.pointerLockElement&&document.exitPointerLock(),h.overlay="ask";let M=Uo[u.st.phase],E=Tr().slice(0,40).sort(()=>Math.random()-.5);df(vt.ov,{ids:u.st.retry.concat(E),types:M.types,modules:M.modules,title:`\u932F\u984C\u9B54\u9F8D\u30FB${M.name_zh}`,okText:"\u7B54\u5C0D\u4E86\uFF01\u9B54\u9F8D\u88AB\u6253\u4E2D\u4E86",onDone:(I,D,W)=>{h.overlay=null,u.busy=!1,I!=null&&rd(I,D,W&&W.id)}})}function rd(u,M,E){let I=h.boss;if(!I)return;let D=Hm(I.st,u,M,E);if(!u){let W=h.p.x-I.p.x,rt=h.p.z-I.p.z,pt=Math.hypot(W,rt)||1;h.v.x=W/pt*8,h.v.z=rt/pt*8,h.v.y=5,wt("\u9B54\u9F8D\u62CD\u62CD\u7FC5\u8180\u628A\u4F60\u5439\u958B\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01"),Xc();return}if(I.g.userData.hitT=.3,cn("hit","stone"),D.done){fg();return}D.phaseUp!=null?(Xm(I.g,D.phaseUp),wt(`\u9B54\u9F8D\u63DB\u4E86\u984F\u8272\uFF01\u7B2C ${D.phaseUp+1} \u968E\u6BB5\uFF1A${Uo[D.phaseUp].name_zh}`)):wt(M?"\u6253\u5B57\u984C\uFF01\u9B54\u9F8D\u88AB\u5927\u5927\u6253\u4E2D\u4E86\uFF01":"\u7B54\u5C0D\u4E86\uFF01\u9B54\u9F8D\u88AB\u6253\u4E2D\u4E86\uFF01"),Xc()}function fg(){X.remove(h.boss.g),h.boss=null,vt.bossbar.hidden=!0,t.coins&&(Vn(R,ju),Nn()),Ee("dragon"),gn(),dg()}function dg(){qn(),document.pointerLockElement&&document.exitPointerLock(),h.overlay="ending";let u=vt.ov;u.innerHTML="",u.hidden=!1;let M=["\u932F\u984C\u9B54\u9F8D\u300C\u5657\u300D\u7684\u4E00\u8072\uFF0C\u8B8A\u56DE\u4E00\u672C\u5C0F\u5C0F\u7684\u932F\u984C\u672C\u3002","\u88E1\u9762\u7684\u6BCF\u4E00\u984C\uFF0C\u4F60\u90FD\u5B78\u6703\u4E86\u3002","","\u4E3B\u89D2\u3000\u4F60","\u5192\u96AA\u3000\u65B9\u584A\u4E16\u754C\u30FB\u52C7\u8005\u5CF6\u4E94\u500B\u50B3\u9001\u9580\u30FB\u6697\u5F71\u754C","\u7DF4\u7FD2\u3000\u55AE\u5B57\u30FB\u6587\u6CD5\u30FB\u53E5\u578B\u30FB\u7247\u8A9E","\u5925\u4F34\u3000\u6751\u6C11\u30FB\u5C0F\u99AC\u30FB\u7926\u8ECA\u30FB\u4E00\u652F\u91E3\u7AFF","",t.coins?`\u734E\u52F5\u3000${ju} \u91D1\u5E63`:"","","\u8B1D\u8B1D\u4F60\u4E00\u8DEF\u7DF4\u7FD2\u82F1\u6587\u3002","\u4E16\u754C\u9084\u5728\uFF0C\u7E7C\u7E8C\u84CB\u4F60\u7684\u57CE\u5821\u5427\uFF01"];u.append(P("div",{class:"ending"},P("div",{class:"paper sun"}),P("div",{class:"paper hill"}),P("div",{class:"paper hill b"}),P("div",{class:"credits"},P("h1",{},"\u65B9\u584A\u4E16\u754C\u50B3\u8AAA"),M.map(E=>P("p",{},E)),P("button",{class:"btn big",onclick:Be},"\u7E7C\u7E8C\u5192\u96AA"))))}function pg(){if(!N.stats.village&&e==="overworld"){for(let u of L.villages.around(h.p.x-30,h.p.z-30,h.p.x+30,h.p.z+30))if(Math.hypot(u.x-h.p.x,u.z-h.p.z)<22){Ee("village");break}}for(let u of Zu(A,m,U,yc())){if(h.dirtyMeta=!0,u.kind==="tut"){cn("pickup"),A.tut.done&&wt("\u65B0\u624B\u6559\u5B78\u5B8C\u6210\u4E86\uFF01\u63A5\u4E0B\u4F86\u770B\u300C\u624B\u518A\u300D\u7684\u4E3B\u7DDA");continue}let M=t.coins?u.q.coins|0:0;M&&(Vn(R,M),Nn()),wt((u.kind==="main"?"\u4E3B\u7DDA\u5B8C\u6210\uFF1A"+u.q.title:"\u4ECA\u65E5\u4EFB\u52D9\u5B8C\u6210\uFF1A"+u.q.text)+(M?`\u3000+${M} \u91D1\u5E63`:""))}qc()}function mg(u){if(u==="lair")return e==="shadow"?{x:gi.x+.5,z:gi.z+.5}:null;if(e!=="overworld")return null;if(u==="stele"&&Zt.stele)return{x:Zt.stele.x+.5,z:Zt.stele.z+.5};if(u==="portal"&&Zt.portal)return{x:Zt.portal.x+.5,z:Zt.portal.z+.5};if(u==="village"){if(!h.vilHint||Date.now()-h.vilHint.t>3e3){let M=null,E=1/0;for(let I of L.villages.around(h.p.x-400,h.p.z-400,h.p.x+400,h.p.z+400)){let D=Math.hypot(I.x-h.p.x,I.z-h.p.z);D<E&&(E=D,M=I)}h.vilHint={t:Date.now(),v:M}}return h.vilHint.v?{x:h.vilHint.v.x,z:h.vilHint.v.z}:null}return null}let od="";function qc(u){let M=!A.tut.done&&m.tutorial[A.tut.step],E=$u(A,m),I=M||E,D=M?A.tut.step+(h.touch?"t":"d"):"";if((u||D!==od)&&(od=D,vt.tut.hidden=!M,vt.tut.innerHTML="",M&&vt.tut.append(P("b",{},`\u65B0\u624B\u6559\u5B78 ${A.tut.step+1}/${m.tutorial.length}`),P("span",{},M.text),P("small",{},h.touch?M.touch:M.desk),P("button",{class:"link",onclick:()=>{pc(A,m),h.dirtyMeta=!0,qc(!0)}},"\u8DF3\u904E\u6559\u5B78"))),vt.obj.hidden=!I||!h.started,!I)return;h.objTarget=mg(I.hint),vt.objArrow.hidden=!h.objTarget;let W=h.objTarget?Math.round(Math.hypot(h.objTarget.x-h.p.x,h.objTarget.z-h.p.z)):0;vt.objText.textContent=(M?"":"\u4E3B\u7DDA\uFF1A")+(M?M.text:E.text)+(h.objTarget&&W>4?`\uFF08\u7D04 ${W} \u683C\uFF09`:"")}function gg(){let u=vt.ov;u.innerHTML="",u.hidden=!1;let M=P("div",{class:"quest-list"});m.main.forEach((I,D)=>M.append(P("div",{class:"quest-item"+(D<A.main?" done":D===A.main?" cur":"")},P("b",{},(D<A.main?"\u2713 ":"")+I.title),P("small",{},I.text+(I.coins&&t.coins?`\u3000\u734E\u52F5 ${I.coins} \u91D1\u5E63`:"")))));let E=P("div",{class:"quest-list"});(A.daily?A.daily.picks:[]).forEach(I=>{let D=m.daily.find(rt=>rt.id===I),W=A.daily.done.includes(I);E.append(P("div",{class:"quest-item"+(W?" done":" cur")},P("b",{},(W?"\u2713 ":"")+D.text),P("small",{},`${W?D.need:Ju(A,m,U,I)} / ${D.need}`+(D.coins&&t.coins?`\u3000\u734E\u52F5 ${D.coins} \u91D1\u5E63`:""))))}),u.append(P("div",{class:"panel"},P("div",{class:"p-head"},P("h2",{},"\u5192\u96AA\u624B\u518A"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Be},"\xD7")),P("h3",{},"\u4ECA\u65E5\u4EFB\u52D9\uFF08\u6BCF\u5929\u63DB 3 \u500B\uFF09"),E,P("h3",{},`\u4E3B\u7DDA\u3000${Math.min(A.main,m.main.length)} / ${m.main.length}`),M,P("p",{class:"muted"},A.tut.done?"\u65B0\u624B\u6559\u5B78\u53EF\u4EE5\u5728\u300C\u8A2D\u5B9A\u300D\u91CD\u65B0\u770B\u3002":`\u65B0\u624B\u6559\u5B78\u9032\u884C\u4E2D\uFF1A\u7B2C ${A.tut.step+1} \u6B65`))),setTimeout(()=>{let I=u.querySelector(".quest-item.cur");I&&I.scrollIntoView&&I.scrollIntoView({block:"nearest"})},0)}function ad(){q0||!gt.requestPointerLock||gt.requestPointerLock()}addEventListener("keydown",u=>{if(u.target&&u.target.tagName==="INPUT")return;let M=u.key.toLowerCase();if(M==="e"){h.overlay==="inv"?Be():!h.overlay&&dn("inv"),u.preventDefault();return}if(h.overlay!=="dead"&&!(h.overlay==="ask"||h.overlay==="quest")){if(M==="escape"&&h.overlay){h.overlay==="quiz"?(vt.ov.hidden=!0,vt.ov.innerHTML="",h.overlay=null):Be();return}if(!h.overlay){if(M==="shift"&&h.ride){Dr();return}h.keys[M]=!0,u.code==="Space"&&(h.keys[" "]=!0,u.preventDefault()),M>="1"&&M<="9"&&(h.sel=+M-1,q()),M==="f"&&td(),M==="v"&&Qf(),M==="m"&&dn("map"),M==="k"&&dn("ach"),M==="j"&&dn("quests")}}}),addEventListener("keyup",u=>{h.keys[u.key.toLowerCase()]=!1,u.code==="Space"&&(h.keys[" "]=!1)}),addEventListener("blur",()=>{h.keys={},qn()}),gt.addEventListener("mousedown",u=>{if(!(h.touch||h.overlay)){if(document.pointerLockElement!==gt){ad();return}if(u.button===0){let M=Ms("center");if(M){bs(M);return}h.mining.active=!0,h.mining.src="center"}if(u.button===2){let M=Ms("center");if(M&&M.kind==="vehicle"){zc(M.veh);return}Ir(ii("center")),h.placeRepeat=.3,h.rightHeld=!0}}}),addEventListener("mouseup",u=>{u.button===0&&qn(),u.button===2&&(h.rightHeld=!1)}),gt.addEventListener("contextmenu",u=>u.preventDefault()),addEventListener("mousemove",u=>{document.pointerLockElement===gt&&(h.yaw-=u.movementX*.0024,h.pitch=Math.max(-1.55,Math.min(1.55,h.pitch-u.movementY*.0024*(h.invert?-1:1))))}),addEventListener("wheel",u=>{h.overlay||h.touch||(h.sel=(h.sel+(u.deltaY>0?1:8))%9,q())},{passive:!0}),document.addEventListener("pointerlockchange",()=>{vt.root.classList.toggle("locked",document.pointerLockElement===gt)});let Nr=new Map;function xg(u){h.touch!==u&&(h.touch=u,vt.root.classList.toggle("touch",u),document.body.classList.toggle("is-touch",u))}vt.root.classList.toggle("touch",h.touch),document.body.classList.toggle("is-touch",h.touch),gt.addEventListener("pointerdown",u=>{if(u.pointerType!=="touch"||(xg(!0),h.overlay))return;if(u.preventDefault(),(document.body.classList.contains("lefty")?u.clientX>innerWidth*.6:u.clientX<innerWidth*.4)&&u.clientY>innerHeight*.35&&!h.joy.active){h.joy={x:0,y:0,active:!0,id:u.pointerId,ox:u.clientX,oy:u.clientY},vt.joy.style.transform=`translate(${u.clientX-60}px, ${u.clientY-60}px)`,vt.joy.hidden=!1,vt.knob.style.transform="translate(0px,0px)",Nr.set(u.pointerId,{kind:"joy"});return}let M={kind:"look",x:u.clientX,y:u.clientY,sx:u.clientX,sy:u.clientY,t0:performance.now(),drag:!1,hold:!1};M.timer=setTimeout(()=>{if(M.drag)return;let E=Ms("screen",M.x,M.y);if(E&&E.kind==="vehicle"){kc(E.veh),M.vehHit=!0;return}M.hold=!0,h.mining.active=!0,h.mining.src="screen",h.mining.sx=M.x,h.mining.sy=M.y},280),Nr.set(u.pointerId,M),h.touchPress=M},{passive:!1}),addEventListener("pointermove",u=>{let M=Nr.get(u.pointerId);if(!M)return;if(M.kind==="joy"){let D=u.clientX-h.joy.ox,W=u.clientY-h.joy.oy,rt=Math.hypot(D,W),pt=55;rt>pt&&(D*=pt/rt,W*=pt/rt),h.joy.x=D/pt,h.joy.y=W/pt,vt.knob.style.transform=`translate(${D}px,${W}px)`;return}let E=u.clientX-M.x,I=u.clientY-M.y;M.x=u.clientX,M.y=u.clientY,!M.drag&&Math.hypot(M.x-M.sx,M.y-M.sy)>12&&(M.drag=!0,clearTimeout(M.timer),M.hold&&(qn(),M.hold=!1)),M.drag?(h.yaw-=E*.0055,h.pitch=Math.max(-1.55,Math.min(1.55,h.pitch-I*.0055*(h.invert?-1:1)))):M.hold&&(h.mining.sx=M.x,h.mining.sy=M.y)});let ld=u=>{let M=Nr.get(u.pointerId);if(M){if(Nr.delete(u.pointerId),h.touchPress===M&&(h.touchPress=null),M.kind==="joy"){h.joy={x:0,y:0,active:!1},vt.joy.hidden=!0;return}if(clearTimeout(M.timer),M.hold)qn();else if(!M.drag&&performance.now()-M.t0<280&&!h.overlay){let E=Ms("screen",M.x,M.y);E&&E.kind==="vehicle"?zc(E.veh):E?bs(E):Ir(ii("screen",M.x,M.y))}}};addEventListener("pointerup",ld),addEventListener("pointercancel",ld);let cd=(u,M,E)=>{u.addEventListener("pointerdown",I=>{I.preventDefault(),I.stopPropagation(),M()}),u.addEventListener("pointerup",E),u.addEventListener("pointercancel",E),u.addEventListener("pointerleave",E)};cd(vt.bJump,()=>{h.jumpHeld=!0},()=>{h.jumpHeld=!1}),cd(vt.bDown,()=>{h.downHeld=!0},()=>{h.downHeld=!1}),vt.bFly.addEventListener("pointerdown",u=>{u.preventDefault(),u.stopPropagation(),td()}),vt.bPlace.addEventListener("pointerdown",u=>{u.preventDefault(),u.stopPropagation(),Ir(ii("center"))}),document.addEventListener("touchmove",u=>{u.target.closest(".scroll, .panel")||u.preventDefault()},{passive:!1}),["gesturestart","gesturechange","dblclick"].forEach(u=>document.addEventListener(u,M=>M.preventDefault(),{passive:!1})),vt.start.hidden=!1,vt.go.onclick=()=>{vt.start.hidden=!0,h.started=!0,h.paused=!1,vt.root.classList.add("started"),h.touch||ad()};async function gn(u){if(h.resetting)return;h.ride&&h.ride.veh&&(h.ride.veh.p={x:h.p.x,y:h.p.y,z:h.p.z},h.ride.veh.yaw=h.ride.yaw);let M={hw_meta:{v:1,seed:x,time:h.time,build:Rc},hw_player:{dims:Object.assign({},h.dimPos,{[e]:{x:h.p.x,y:h.p.y,z:h.p.z,yaw:h.yaw}}),x:h.p.x,y:h.p.y,z:h.p.z,yaw:h.yaw,pitch:h.pitch,fly:h.fly,sel:h.sel,hp:O.hp,bed:h.bed,armor:h.armor,armorDur:h.armorDur,horse:h.horseMob&&!h.horseMob.gone?{x:h.horseMob.p.x,y:h.horseMob.p.y,z:h.horseMob.p.z,saddled:!!h.horseMob.saddled}:h.horse},hw_inventory:Do(S),hw_coins:Dm(R),[i("hw_furnaces")]:$,[i("hw_chests")]:Object.fromEntries(Object.entries(J).map(([E,I])=>[E,Do(I)])),[i("hw_crops")]:nt,hw_quests:it,hw_portal_claimed:j.slice(-200),hw_ach:N,hw_story:A,[i("hw_vehicles")]:h.vehicles.map(E=>({kind:E.kind,x:E.p.x,y:E.p.y,z:E.p.z,yaw:E.yaw,wy:E.y,st:E.st?{x:E.st.x,y:E.st.y,z:E.st.z,shape:E.st.shape,from:E.st.from,s:E.st.s}:null}))};z.dirty&&(u||Date.now()-(h.mapSavedAt||0)>3e4)&&(M[i("hw_map")]=z.serialize(),h.mapSavedAt=Date.now());for(let E of h.dirty){let I=T.get(E);I&&(M[s+E]=tf(I))}h.dirty.clear(),h.dirtyMeta=!1;try{await xc(M),h.lastSave=Date.now()}catch(E){console.warn("save failed",E),!h.quotaWarned&&E&&(E.name==="QuotaExceededError"||/quota/i.test(E.message||""))&&(h.quotaWarned=!0,wt("\u5B58\u6A94\u7A7A\u9593\u4E0D\u5920\u4E86\uFF01\u8ACB\u5230\u300C\u8A2D\u5B9A\u300D\u532F\u51FA\u4E16\u754C\u5099\u4EFD\uFF0C\u6216\u8ACB\u5927\u4EBA\u6E05\u4E00\u4E0B\u700F\u89BD\u5668\u7A7A\u9593"))}}setInterval(()=>{h.started&&gn()},8e3),document.addEventListener("visibilitychange",()=>{document.hidden&&h.started&&gn(!0)}),addEventListener("pagehide",()=>{h.started&&gn(!0)}),h.stats={mined:0,placed:0};function hd(){let u=innerWidth,M=innerHeight;St.setSize(u,M,!1),ut.aspect=u/M,ut.updateProjectionMatrix()}addEventListener("resize",hd),hd(),Nn(),q(),Ki(),Re(),t.creative&&($i("#coinpill").hidden=!0,$i("#modebadge").hidden=!1,vt.btnShop.hidden=!0,vt.hearts.hidden=!0),(Array.isArray(g.vehs)?g.vehs:[]).forEach(u=>{u&&(u.kind==="boat"||u.kind==="minecart"&&u.st)&&Bc(u.kind,u,u.yaw||0,u.kind==="boat"?{y:u.wy}:{st:Object.assign({v:0,lastIn:0},u.st)})}),Ji(),setInterval(Ji,6e4),Wn(),e==="shadow"&&(Ee("shadow"),setTimeout(()=>wt("\u9019\u88E1\u662F\u6697\u5F71\u754C\uFF01\u932F\u984C\u9B54\u9F8D\u5728\u524D\u9762\u7684\u5E73\u53F0\u4E0A\uFF1B\u56DE\u5BB6\u8D70\u9032\u5F8C\u9762\u7684\u50B3\u9001\u9580"),600)),addEventListener("pageshow",u=>{u.persisted&&Wn()});let ud=performance.now(),Ko=0,Yc=0,_g=new ce("#EFEBDD"),yg=new ce("#22302F"),vg=new ce("#E6B48C");function fd(u){requestAnimationFrame(fd);let M=(u-ud)/1e3;ud=u;let E=Math.min(.05,M);h.frames.push(M*1e3),h.frames.length>4e3&&h.frames.shift(),ft.update(h.p.x,h.p.z);let I=ft.ready(h.p.x,h.p.z);if(h.auto&&wg(E),h.started&&!h.overlay&&I&&bg(E),h.started&&I&&!h.travelling){let he=f.get(ft.get(h.p.x,h.p.y+.2,h.p.z));he&&he.interact==="shadow_portal"?!h.portalLock&&t.portals&&(h.portalT=(h.portalT||0)+E,h.portalT>1&&cg(e==="shadow"?"overworld":"shadow")):(h.portalLock=!1,h.portalT=0)}h.started&&!h.dead&&Xf(O,E)&&(Ki(),h.dirtyMeta=!0),h.time=(h.time+E/Vb)%1;let D=h.time*Math.PI*2,W=Math.sin(D),rt=e==="shadow"?.42:Math.min(1,Math.max(0,(W+.12)/.42));et.copy(yg).lerp(_g,rt);let pt=Math.max(0,1-Math.abs(W)/.3)*(rt>.05?1:.4);if(et.lerp(vg,pt*.55),e==="shadow"&&et.set("#1C2620"),!(t.creative&&wn("hw_weather","on")==="off")?Df(h.weather,E):h.weather.level=0,h.ambT=(h.ambT||0)+E,h.ambT>1){h.ambT=0;let he=Math.floor(h.p.x),Bt=Math.floor(h.p.z),Qt=!1;for(let Le=2;Le<14&&!Qt;Le++)f.flat.opaque[ft.get(he,Math.floor(h.p.y)+Le,Bt)]&&(Qt=!0);h.underground=Qt&&h.p.y<L.height(he,Bt)-4,h.biome=L.biomeOf(he,Bt);let be=If({day:rt,underground:h.underground});be!==h.musicScene&&(h.musicScene=be,Tf(Pf[be]))}let Mt=h.underground||e==="shadow"?null:Nf(h.biome,h.weather),Wt=Mt?h.weather.level:0;Wt&&et.lerp(h.rainSky||(h.rainSky=new ce("#8E9590")),.45*Wt),ht(E,ut.position,Mt),Cf(Mt==="rain"?Wt:0),ys(h.overlay==="quiz"||h.overlay==="ask"||h.overlay==="quest"),Vt.uniforms.uDay.value=rt*(1-.3*Wt),Vt.uniforms.uFog.value.set(...Mg(et));let se=$o();h.eyeOff*=Math.pow(5e-4,E);let ne=Fc();if(h.view==="tp"){let he=vr(se,{x:-ne.x,y:-ne.y,z:-ne.z},4,ei,Qt=>f.flat.opaque[Qt]===1),Bt=he?Math.max(.4,he.dist-.25):4;ut.position.set(se.x-ne.x*Bt,se.y-ne.y*Bt,se.z-ne.z*Bt)}else ut.position.set(se.x,se.y,se.z);ut.rotation.set(h.pitch,h.yaw,0);let Pe=ut.far*.8;if(Ne.position.set(ut.position.x+Math.cos(D)*Pe,ut.position.y+Math.sin(D)*Pe,ut.position.z+.25*Pe),Ne.scale.setScalar(Pe*.14),H.position.set(ut.position.x-Math.cos(D)*Pe,ut.position.y-Math.sin(D)*Pe,ut.position.z-.25*Pe),H.scale.setScalar(Pe*.1),Ne.visible=H.visible=e!=="shadow",dt.visible=h.view==="tp",dt.visible){dt.position.set(h.p.x,h.p.y+(h.ride?G0[h.ride.kind]:0),h.p.z),dt.rotation.y=h.yaw;let he=Math.hypot(h.v.x,h.v.z),Bt=Math.sin(u/120)*Math.min(1,he/4)*.7;Kt.rotation.x=Bt,Dt.rotation.x=-Bt,Lt.rotation.x=-Bt,jt.rotation.x=Bt;let Qt=.35+.65*rt;dt.children.forEach(be=>be.material.color.copy(be.userData.base).multiplyScalar(Qt))}for(let he in te)te[he].color.setScalar(.4+.6*rt);id.color.setScalar(.5+.5*rt);for(let he in Pr)Pr[he].color.copy(Pr[he].userData.base).multiplyScalar(.35+.65*rt);h.ride&&h.ride.obj&&(h.ride.obj.position.set(h.p.x,h.p.y,h.p.z),h.ride.obj.rotation.y=h.ride.yaw,h.ride.obj.rotation.x=h.ride.pitch||0);let Te=h.started&&!h.overlay?h.mining.active&&h.mining.src==="screen"?ii("screen",h.mining.sx,h.mining.sy):ii("center"):null;if(Te){re.visible=!0;let he=Oc(Te.n);if(he){let Bt=1,Qt=1,be=1,Le=0,Ye=0,Yn=0;for(let Bs of he)Bt=Math.min(Bt,Bs[0]),Qt=Math.min(Qt,Bs[1]),be=Math.min(be,Bs[2]),Le=Math.max(Le,Bs[3]),Ye=Math.max(Ye,Bs[4]),Yn=Math.max(Yn,Bs[5]);re.scale.set(Le-Bt,Ye-Qt,Yn-be),re.position.set(Te.x+(Bt+Le)/2,Te.y+(Qt+Ye)/2,Te.z+(be+Yn)/2)}else re.scale.set(1,1,1),re.position.set(Te.x+.5,Te.y+.5,Te.z+.5)}else re.visible=!1;let en=h.touchPress;if(eg(!h.started||h.overlay||h.mining.active?null:h.touch?en&&!en.drag&&!en.hold?ii("screen",en.x,en.y):null:Te),h.mining.active&&Te){let he=Te.x+","+Te.y+","+Te.z;he!==h.mining.k&&(h.mining.k=he,h.mining.t=0),h.mining.t+=E;let Bt=t.creative?f.get(Te.n).hardness<0?1/0:t.breakTime:Ac(f.get(Te.n),nd()).time;if(Bt===1/0)De.visible=!1,h.mining.warned||(wt(f.name(Te.n)+"\u6316\u4E0D\u52D5"),h.mining.warned=!0);else{h.mining.tick=(h.mining.tick||0)+E,h.mining.tick>.25&&(h.mining.tick=0,cn("hit",Ar(f.get(Te.n))));let Qt=h.mining.t/Bt;De.visible=!0,De.position.copy(re.position),De.scale.copy(re.scale),De.material.map=Ve[Math.min(3,Math.floor(Qt*4))],Qt>=1&&(j0(Te),h.mining.k="",h.mining.t=0,De.visible=!1)}}else De.visible=!1,h.mining.active||(h.mining.warned=!1);if(h.rightHeld&&!h.overlay&&(h.placeRepeat-=E,h.placeRepeat<=0&&(Ir(ii("center")),h.placeRepeat=.25)),Sg(E),h.fish){let he=Du(h.fish,E),Bt=S.slots[h.sel];!Bt||Bt.id!=="fishing_rod"||Math.hypot(h.p.x-h.fish.at.x,h.p.z-h.fish.at.z)>16?Gc():(he==="bite"?(wt("\u9B5A\u4E0A\u9264\u4E86\uFF01\u5FEB\u9EDE\u4E00\u4E0B\uFF01"),cn("pickup")):he==="escape"&&wt("\u9B5A\u6E9C\u8D70\u4E86\uFF0C\u518D\u7B49\u7B49\u770B"),Hc.position.set(h.fish.at.x,h.fish.at.y-.05+(h.fish.phase==="bite"?-.18:Math.sin(u/400)*.03),h.fish.at.z))}if(h.netT=(h.netT||0)+E,h.netT>.25&&(h.netT=0,B.sendState({x:h.p.x,y:h.p.y,z:h.p.z,yaw:h.yaw,dim:e,ride:h.ride?h.ride.kind:null})),h.started){h.lookAcc=(h.lookAcc||0)+Math.min(1,Math.abs(h.yaw-(h.lastYaw??h.yaw))+Math.abs(h.pitch-(h.lastPitch??h.pitch))),h.lastYaw=h.yaw,h.lastPitch=h.pitch;let he=Math.hypot(h.p.x-(h.lastPx??h.p.x),h.p.z-(h.lastPz??h.p.z));he<2&&(h.walkAcc=(h.walkAcc||0)+he),h.lastPx=h.p.x,h.lastPz=h.p.z,h.storyT=(h.storyT||0)+E,h.storyT>.5&&(h.storyT=0,pg())}if(h.objTarget&&!vt.objArrow.hidden){let he=h.objTarget,Bt=Math.atan2(-(he.x-h.p.x),-(he.z-h.p.z))-h.yaw;vt.objArrow.style.transform="rotate("+-Bt+"rad)"}if(h.started&&!document.hidden&&!h.dead&&(h.playT=(h.playT||0)+E,h.playT>1800&&(h.playT=0,vt.rest.hidden=!1,cn("pickup"))),h.mapT=(h.mapT||0)+E,h.mapT>.3&&(h.mapT=0,z.scan(ft,h.mapDirty),Jo&&ag()),h.cropT=(h.cropT||0)+E,h.cropT>2){h.cropT=0;let he=Date.now();for(let Bt in nt){let[Qt,be,Le]=Bt.split(",").map(Number);if(!ft.ready(Qt,Le))continue;let Ye=f.get(ft.get(Qt,be,Le));if(!Ye||!Ye.crop){delete nt[Bt];continue}let Yn=gf(nt[Bt].t,he,nt[Bt].wet);Yn>(Ye.stage|0)&&(ft.set(Qt,be,Le,f.num("wheat_"+Yn)),h.dirtyMeta=!0)}}Lc(h.overlay?0:E,rt,u),hg(h.overlay?0:E);for(let he in $){let Bt=$[he];Bt.jobs.length&&(Bf(Bt,E),h.dirtyMeta=!0,h.overlay==="furnace"&&he===An&&(h.furnUi=(h.furnUi||0)+E)>.5&&(h.furnUi=0,Un()))}St.render(X,ut),Ko+=M,Yc++,Ko>.5&&(vt.dbg&&(vt.dbg.textContent=`${Math.round(Yc/Ko)} fps \xB7 \u5340\u584A ${ft.stats.loaded} \xB7 ${um[L.biomeOf(Math.floor(h.p.x),Math.floor(h.p.z))]} \xB7 ${h.p.x.toFixed(1)}, ${h.p.y.toFixed(1)}, ${h.p.z.toFixed(1)}`),Ko=0,Yc=0),!I&&h.started?vt.loading.hidden=!1:vt.loading.hidden=!0}function Mg(u){let M=u.getHexString();return[parseInt(M.slice(0,2),16)/255,parseInt(M.slice(2,4),16)/255,parseInt(M.slice(4,6),16)/255]}function bg(u){let M=h.keys,E=(M.d?1:0)-(M.a?1:0),I=(M.w?1:0)-(M.s?1:0);h.joy.active&&(E=h.joy.x,I=-h.joy.y);let D=Math.min(1,Math.hypot(E,I));if(D>0){let Ye=Math.hypot(E,I);E=E/Ye*D,I=I/Ye*D}let W=-Math.sin(h.yaw),rt=-Math.cos(h.yaw),pt=Math.cos(h.yaw),lt=-Math.sin(h.yaw);if(h.ride&&h.ride.kind!=="horse"){ig(u,E,I,W,rt,pt,lt);return}let Mt=M.control||!h.fly&&M.shift||h.joy.active&&D>.92,Wt=ei(h.p.x,h.p.y+.1,h.p.z),se=ei(h.p.x,h.p.y+1,h.p.z),ne=f.flat.liquid[Wt]===1||f.flat.liquid[se]===1,Pe=h.fly?10:h.ride?8.5:ne?2.6:Mt?6.2:4.3,Te=(W*I+pt*E)*Pe,en=(rt*I+lt*E)*Pe,he=M[" "]||h.jumpHeld,Bt=h.fly&&M.shift||h.downHeld;if(h.fly)h.v.x=Te,h.v.z=en,h.v.y=((he?1:0)-(Bt?1:0))*8;else{let Ye=h.onGround?14:5,Yn=1-Math.exp(-Ye*u);h.v.x+=(Te-h.v.x)*Yn,h.v.z+=(en-h.v.z)*Yn,ne?(h.v.y-=9*u,h.v.y<-3&&(h.v.y=-3),he&&(h.v.y=3.4)):f.flat.climb[Wt]||f.flat.climb[se]?(h.v.y=he||I>.1?3.2:Bt?-3:Math.max(h.v.y-28*u,-1.5),h.fallTop=h.p.y):(h.v.y-=28*u,h.v.y<-40&&(h.v.y=-40),he&&h.onGround&&(h.v.y=h.ride?10.5:8.6,h.onGround=!1))}let Qt=h.onGround,be=oc(h.p,h.v,u,Pt,{canStep:!h.fly,grounded:h.onGround});if(h.onGround=be.onGround,be.stepped&&(h.eyeOff-=be.stepped),h.fallTop==null||h.fly||ne||h.onGround&&Qt?h.fallTop=h.p.y:h.onGround||(h.fallTop=Math.max(h.fallTop,h.p.y)),h.onGround&&!Qt){let Ye=Gf(h.fallTop-h.p.y,{water:ne,flying:h.fly});Ye&&(w(Ye),wt("\u54CE\u5440\uFF0C\u6454\u4E86\u4E00\u4E0B")),h.fallTop=h.p.y}let Le=Math.hypot(h.v.x,h.v.z);h.onGround&&!h.fly&&Le>1&&(h.stepT=(h.stepT||0)+u*Le,h.stepT>1.8&&(h.stepT=0,cn("step",Ar(f.get(ei(h.p.x,h.p.y-.5,h.p.z)))))),h.p.y<-20&&(h.p={x:Zt.x,y:Zt.y+1,z:Zt.z},h.v={x:0,y:0,z:0},h.fallTop=h.p.y)}function Sg(u){let M=h.p.x,E=h.p.y+.9,I=h.p.z;for(let D=h.drops.length-1;D>=0;D--){let W=h.drops[D];W.age+=u;let rt=M-W.p.x,pt=E-W.p.y,lt=I-W.p.z,Mt=Math.hypot(rt,pt,lt);if(Mt<1.5&&W.age>.25&&Sn(S,W.id,1,v)===0){X.remove(W.s),h.drops.splice(D,1),h.dirtyMeta=!0,q(),cn("pickup");continue}if(Mt<4.5&&W.age>.25?(W.v.x=rt/Mt*6,W.v.y=pt/Mt*6,W.v.z=lt/Mt*6,W.p.x+=W.v.x*u,W.p.y+=W.v.y*u,W.p.z+=W.v.z*u):(W.v.y-=18*u,W.v.x*=.9,W.v.z*=.9,oc(W.p,W.v,u,Pt,{w:.25,h:.25})),W.age>300){X.remove(W.s),h.drops.splice(D,1);continue}W.s.position.set(W.p.x,W.p.y+.2+Math.sin(W.age*3)*.06,W.p.z)}}h.auto=Pc.get("auto")==="walk";let dd=0;function wg(u){h.started||vt.go.click(),dd+=u,h.keys.w=!0,h.keys[" "]=dd%1.6<.15,h.yaw+=u*.08}window.HW={build:Rc,TEST:q0,G:h,reg:f,inv:S,wallet:R,world:ft,Inv:Xu,Aud:Rf,Amb:Uf,chests:J,crops:nt,Farm:Af,clickSlot:qt,MODE:n,RULE:t,switchMode:Uc,questState:it,tradesJson:p,spawnVillagers:In,terr:L,claimPortalRewards:Wn,portals:k,claimedIds:j,mobS:Et,mobDefs:ct,spawnMob:Ae,hitMob:bs,mobAt:Ms,surfaceY:Jt,health:O,hurt:w,Health:$f,furnaces:$,Smelt:Vf,smeltList:ot,recipes:_,craftCtx:Gt,breakInfo:Ac,start(){vt.go.click()},state(){return{pos:{...h.p},coins:R.coins,inv:Do(S),loaded:ft.stats.loaded,stats:{...h.stats},overlay:h.overlay,fly:h.fly}},lookAt(u,M,E){let I=$o(),D=u-I.x,W=M-I.y,rt=E-I.z;h.yaw=Math.atan2(-D,-rt),h.pitch=Math.atan2(W,Math.hypot(D,rt))},target(){let u=ii("center");return u&&{x:u.x,y:u.y,z:u.z,n:u.n,face:u.face}},mine(u){u?(h.mining.active=!0,h.mining.src="center"):qn()},use(){return Ir(ii("center"))},key(u,M){h.keys[u]=M},open:dn,close:Be,save:gn,spawn:Zt,dismount:Dr,Rail:Pu,ach:N,mapv:z,Fish:Fu,bump:Ee,bank:Z,net:B,backupData:Kf,applyPrefs:_t,story:A,Story:Ku,QJ:m,DIM:e,bossDamage:rd,Shadow:ku,hitVehicle:kc,rideVehicle:zc,ghostState:()=>({visible:Os.visible,sy:Vc[0].scale.y,two:Vc[1].visible}),perf(){return{frames:h.frames.slice(),meshMs:ft.stats.meshMs.slice(),genMs:ft.stats.genMs.slice(),loaded:ft.stats.loaded}},resetPerf(){h.frames.length=0,ft.stats.meshMs.length=0,ft.stats.genMs.length=0},info:()=>({calls:St.info.render.calls,tris:St.info.render.triangles,geos:St.info.memory.geometries,objs:X.children.length}),ready:()=>ft.ready(h.p.x,h.p.z)},requestAnimationFrame(fd)}function Yb(){let n=$i("#ui"),t=e=>n.querySelector(e);return Pc.get("debug")!==null&&(t("#dbg").hidden=!1),{root:n,coins:t("#coins"),armor:t("#armorhud"),hearts:t("#hearts"),flash:$i("#hurt"),hotbar:t("#hotbar"),selName:t("#selname"),ov:$i("#ov"),toasts:t("#toasts"),btnInv:t("#b-inv"),btnSnd:t("#b-snd"),btnShop:t("#b-shop"),btnSet:t("#b-set"),btnView:t("#b-view"),bRide:t("#b-ride"),bMap:t("#b-map"),bAch:t("#b-ach"),mini:t("#minimap"),bossbar:t("#bossbar"),bossName:t("#bossname"),bossHp:t("#bosshp"),obj:t("#objective"),rest:t("#restcard"),restOk:t("#restok"),learnPill:t("#learnpill"),learnCnt:t("#learncnt"),learnBar:t("#learnbar"),objArrow:t("#objarrow"),objText:t("#objtext"),tut:t("#tutorial"),bQuest:t("#b-quest"),joy:t("#joy"),knob:t("#knob"),bJump:t("#b-jump"),bFly:t("#b-fly"),bPlace:t("#b-place"),bDown:t("#b-down"),start:$i("#start"),go:$i("#go"),dbg:t("#dbg").hidden?null:t("#dbg"),loading:t("#loading")}}qb().catch(n=>{console.error(n);let t=document.getElementById("err");t&&(t.hidden=!1,t.textContent="\u8F09\u5165\u5931\u6557\uFF1A"+n.message)});})();
